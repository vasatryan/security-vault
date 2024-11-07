import re

def validate_firstname(username):
    if len(username) < 3 or len(username) > 50:
        return "First name must be between 3 and 50 characters long."
    # if not username.isalnum():
    #     return "First name must contain only alphanumeric characters."
    reserved_name = ['admin', 'root']
    if username.lower() in reserved_name:
        return "First name must not be keyword as admin or root"
    return False


def validate_lastname(username):
    if len(username) < 4 or len(username) > 50:
        return "Last name must be between 3 and 50 characters long."
    # if not username.isalnum():
    #     return 'Last name must contain only alphanumeric characters.'
    reserved_name = ['admin', 'root']
    if username.lower() in reserved_name:
        return "Last name must not be keyword as admin or root"
    return False


def validate_email(email):
    email_pattern = r'^[\w\.-]+@[\w\.-]+$'
    toggle = re.match(email_pattern, email) is not None
    if toggle:
        return False
    return "Invalid email address format."

# veranayel
def validate_phone(phone):
    phone_pattern = r'^(?:\+374\d{8}|0\d{8})$'
    toggle = re.match(phone_pattern, phone) is not None
    if toggle:
        return None
    return "Phone number must be in the format +374xxxxxxxxx or 0xxxxxxxx."


def validate_password(password):
    if len(password) < 8:
        return "Password must be at least 8 characters long."
    if not any(char.islower() for char in password):
        return "Password must contain at least one lowercase letter."
    if not any(char.isupper() for char in password):
        return "Password must contain at least one uppercase letter."
    if not any(char.isdigit() for char in password):
        return "Password must contain at least one digit."
    # if not any(char in ".@!#$%&^*" for char in password):
    #     return "Password must contain at least one special character (.@!#$%&^*)."
    return False


def validate_password_repeat(password, password_repeat):
    toggle = password == password_repeat
    if toggle:
        return False
    return "Passwords do not match each other."
