from app.schemas.soil import SoilDataInput, RiskAnalysisOutput

class AIEngine:
    @staticmethod
    def analyze_soil_health(data: SoilDataInput) -> RiskAnalysisOutput:
        score = 100
        alerts = []
        recommendations = []
        crop = data.crop_type.lower()

        # --- Base Rule: Extreme pH ---
        if data.ph_level < 5.5:
            score -= 15
            alerts.append("Soil too Acidic")
            recommendations.append("Apply agricultural lime (calcium carbonate) to raise pH.")
        elif data.ph_level > 7.5:
            score -= 15
            alerts.append("Soil too Alkaline") # Risk for Potato Scab
            if crop == "potato":
                 alerts.append("High Risk of Common Scab (Streptomyces scabies)")
                 recommendations.append("Potato Scab thrives in alkaline soil. Avoid liming. Maintain soil moisture.")
            else:
                 recommendations.append("Apply gypsum or elemental sulfur to lower pH.")

        # --- Base Rule: Nutrient Deficiencies ---
        if data.nitrogen < 120:
            score -= 10
            alerts.append("Nitrogen Deficiency")
            recommendations.append("Apply Urea or Nitrogen-rich compost.")

        # --- CROP SPECIFIC RULES (Based on provided charts) ---
        
        # 1. TOMATO DISEASES
        if "tomato" in crop:
            # Damping Off (Pythium) - High Moisture
            if data.moisture > 80:
                score -= 25
                alerts.append("High Risk: Damping Off (Pythium spp.)")
                recommendations.append("Biocontrol: Seed treatment with Trichoderma viride @ 4 g/kg.")
                recommendations.append("Chemical: Soil drenching with Copper oxychloride 0.25%.")
            
            # Bacterial Wilt (Ralstonia) - High Temp + Moisture
            if data.temperature > 28 and data.moisture > 70:
                score -= 30
                alerts.append("Critical Risk: Bacterial Wilt (Ralstonia)")
                recommendations.append("Biocontrol: Soil application of Pseudomonas fluorescens + Trichoderma.")
                recommendations.append("Chemical: Drenching Copper oxychloride 0.3% + Streptocycline 200 ppm.")

            # Early Blight (Alternaria) - General Stress (Low N or High Temp)
            if data.nitrogen < 100 or data.temperature > 30:
                 alerts.append("Risk: Early Blight (Alternaria solani)")
                 recommendations.append("Preventive Spray: Trichoderma viride (1%) or Neem oil 3 ml/L.")

        # 2. POTATO DISEASES
        elif "potato" in crop:
            # Late Blight (Phytophthora) - Cool & Wet
            if data.temperature < 22 and data.moisture > 85:
                score -= 40
                alerts.append("CRITICAL: Late Blight (Phytophthora infestans)")
                recommendations.append("Biocontrol: Preventive spray of Trichoderma / Pseudomonas.")
                recommendations.append("Chemical: Metalaxyl + Mancozeb 0.25% or Cymoxanil + Mancozeb.")

            # Black Scurf (Rhizoctonia) - Cool/Moist soil
            if data.temperature < 20 and data.moisture > 60:
                 alerts.append("Risk: Black Scurf / Stem Canker")
                 recommendations.append("Treatment: Seed tuber treatment with Trichoderma harzianum.")

        # 3. CUCUMBER DISEASES
        elif "cucumber" in crop or "cuncumber" in crop: # Handle typo
            # Downy Mildew - High Humidity/Moisture
            if data.moisture > 80:
                score -= 20
                alerts.append("High Risk: Downy Mildew")
                recommendations.append("Biocontrol: Preventive spray of Pseudomonas fluorescens.")
                recommendations.append("Chemical: Metalaxyl + Mancozeb 0.25%.")

            # Fusarium Wilt - Warm Soil
            if data.temperature > 28:
                 score -= 15
                 alerts.append("Risk: Fusarium Wilt")
                 recommendations.append("Soil application of Trichoderma harzianum; Crop rotation.")

        # --- Generic Logic for other crops ---
        else:
            if data.moisture < 20:
                score -= 20
                alerts.append("Drought Stress Detected")
                recommendations.append("Initiate drip irrigation cycles.")

        # --- Aggregation ---
        final_score = max(0, score)
        
        risk_level = "Low"
        if final_score < 40:
            risk_level = "Critical"
        elif final_score < 60:
            risk_level = "High"
        elif final_score < 80:
            risk_level = "Moderate"

        return RiskAnalysisOutput(
            risk_score=final_score,
            risk_level=risk_level,
            alerts=alerts,
            recommendations=recommendations,
            confidence=0.95
        )
