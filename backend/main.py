from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from app.schemas.soil import SoilDataInput, RiskAnalysisOutput
from app.services.ai_engine import AIEngine

app = FastAPI(title="Krishindria Enterprise API", version="1.0.0")

# CORS Configuration
origins = [
    "http://localhost:5173",
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {
        "system": "Krishindria AI Engine",
        "status": "Operational",
        "version": "1.0.0"
    }

@app.post("/api/predict", response_model=RiskAnalysisOutput)
async def predict_soil_health(data: SoilDataInput):
    """
    Analyze soil parameters using the Hybrid AI Engine.
    Returns risk score, alerts, and actionable recommendations.
    """
    try:
        # Phase 1: Call Rule-Based Engine
        # Phase 2: Will check ML Model here if confidence < 0.8
        result = AIEngine.analyze_soil_health(data)
        return result
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
