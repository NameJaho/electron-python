import uvicorn


def main():
    uvicorn.run('route:app',
                port=8081,
                workers=1,
                access_log=False,
                app_dir='./')


if __name__ == '__main__':
    main()
