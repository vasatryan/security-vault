#!/bin/bash

# Source the environment variables
source /var/www/security-vault/security-vault-backend/.env

# Start the FastAPI application
/usr/bin/env python3 /var/www/security-vault/security-vault-backend/app/main.py &

# Start the controller
/usr/bin/env python3 /var/www/security-vault/security-vault-backend/src/controller.py

