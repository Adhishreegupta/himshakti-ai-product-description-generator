from fastapi.responses import JSONResponse


def error_response(msg):

    return JSONResponse(

        status_code=404,

        content={
            "error":msg
        }

    )