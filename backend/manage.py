import os
from flask_script import Manager
from flask_migrate import Migrate

from app import app, db


app.config.from_object(os.environ['APP_SETTINGS'])

migrate = Migrate(app, db)
manager = Manager(app)


if __name__ == '__main__':
    manager.run()