from pydantic import BaseModel, Field
from typing import List, Optional

class SoilDataInput(BaseModel):
    ph_level: float = Field(..., ge=0, le=14, description="Soil pH Level")
    moisture: float = Field(..., ge=0, le=100, description="Soil Moisture Percentage")
    temperature: float = Field(..., description="Soil Temperature in Celsius")
    organic_matter: float = Field(..., ge=0, description="Organic Matter Percentage")
    nitrogen: float = Field(..., ge=0, description="Nitrogen content (mg/kg)")
    phosphorus: float = Field(..., ge=0, description="Phosphorus content (mg/kg)")
    potassium: float = Field(..., ge=0, description="Potassium content (mg/kg)")
    crop_type: str = Field(..., description="Target Crop")

class RiskAnalysisOutput(BaseModel):
    risk_score: int = Field(..., Ge=0, Le=100, description="Overall Risk Score (0-100)")
    risk_level: str = Field(..., description="Low, Moderate, High, Critical")
    alerts: List[str] = Field(default=[], description="Specific warnings")
    recommendations: List[str] = Field(default=[], description="Actionable advice")
    confidence: float = Field(default=0.95, description="Confidence score of the analysis")
