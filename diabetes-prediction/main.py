from fastapi import FastAPI, HTTPException
from typing import Union
import predictor as pred
import json
import uvicorn


from fastapi.middleware.cors import CORSMiddleware


app = FastAPI()


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/api/predict")
async def get_prediction(
    preg: Union[int, float],
    gluc: Union[int, float],
    bloop: Union[int, float],
    skit: Union[int, float],
    insu: Union[int, float],
    bmi: Union[int, float],
    dpf: Union[int, float],
    age: Union[int, float],
):
    try:
        res, acc = pred.prediction(
            [
                preg,
                gluc,
                bloop,
                skit,
                insu,
                bmi,
                dpf,
                age,
            ]
        )

    except Exception as err:
        return HTTPException(
            403, detail={"message": "Server Error while processing data"}
        )

    return json.dumps(
        {"message": "Ok", "data": {"result": str(res), "accuracy": acc * 100}}
    )


if __name__ == "__main__":
    config = uvicorn.Config("main:app", port=3000, log_level="info")
    server = uvicorn.Server(config)
    server.run()
