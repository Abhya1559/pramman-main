from enum import unique
from flask import Flask, jsonify,request,session
from flask_sqlalchemy import SQLAlchemy
from werkzeug.security import generate_password_hash, check_password_hash
from flask_cors import CORS
from flask_jwt_extended import JWTManager, jwt_required, create_access_token, get_jwt_identity
app = Flask(__name__)
CORS(app)
app.config['SECRET_KEY'] = 'abm'
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///mydatabase.db'  # For SQLite
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# Initialize the SQLAlchemy object
db = SQLAlchemy(app)

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(100), unique=True, nullable=False)
    password = db.Column(db.String(100),unique = True,nullable = False)

class Organization(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100),nullable = False)
    about = db.Column(db.String(250),nullable = False)
    org_size = db.Column(db.Integer,nullable = False)
    org_type  = db.Column(db.String(250),nullable = False)
    estd_date = db.Column(db.String(10),nullable = False)
    country = db.Column(db.String(250),nullable = False)
    state  = db.Column(db.String(250),nullable = False)
    city = db.Column(db.String(250),nullable = False)
    pincode = db.Column(db.Integer,nullable = False)
    email = db.Column(db.String(250),nullable = False, unique)
    phone = db.Column(db.Integer,nullable = False)

#EVENT,CERTIFICATE
class Event(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100),nullable = False)
    about = db.Column(db.String(100),nullable = False)
    type = db.Column(db.String(250),nullable = False)
    hash_tag = db.Column(db.String(250),nullable = False)
    started_date = db.Column(db.String(10),nullable = False)
    end_date = db.Column(db.String(10),nullable = False)
    country = db.Column(db.String(250),nullable = False)
    state  = db.Column(db.String(250),nullable = False)
    city = db.Column(db.String(250),nullable = False)
    pincode = db.Column(db.Integer,nullable = False)
    
class Certificate(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    recipient_name = db.Column(db.String(100), nullable=False)  # Name of the person receiving the certificate
    event_name = db.Column(db.String(100), nullable=False)  # Name of the event for which the certificate is issued
    issued_date = db.Column(db.String(10), nullable=False)  # Date when the certificate was issued (format: YYYY-MM-DD)
    certificate_type = db.Column(db.String(50), nullable=False)  # Type of certificate (e.g., Participation, Completion)
    created_at = db.Column(db.DateTime, default=db.func.current_timestamp())  # Automatically store the creation date

@app.route('/register', methods=['POST'])
def register():
    data = request.get_json()
    name = data['name']
    email = data['email']
    password = data['password']
    hashed_password = generate_password_hash(password, method='pbkdf2:sha256',salt_length=16)
    user = User(name=name, email=email,password = hashed_password)   
    db.session.add(user)
    db.session.commit()
    return jsonify({"message": f"User {name} added successfully"})

@app.route('/login', methods= ['POST'])
def login():
    data = request.get_json()
    email = data['email']
    password = data['password']
    user = User.query.filter_by(email = email).first()

    if user:
        if check_password_hash(user.password,password):
            session['user']=user.id
            session['loggedIn'] = True
            return jsonify({"message": f"User {user.name} login successfully"})
        else:
            return jsonify({"message":"Invalid password"})
    else:
        return jsonify({"message":"user not found"})
  
@app.route("/api/organisation",methods=['GET'])
def get_organisation():
    if not session.get("loggedIn"):
         return jsonify({"message":"User is not authenticated"})
    else:
        data = request.get_json()
        id = data['id']
        org_data = Organization.query.filter_by(id = id).first()
        return org_data

@app.route("/api/organisation",methods=['POST'])
def save_organisation():
    if not session.get("loggedIn"):
         return jsonify({"message":"User is not authenticated"})
    else:
        data = request.get_json()
        # Extract data from the request
        name = data.get('name')
        about = data.get('about')
        org_size = data.get('org_size')
        org_type = data.get('org_type')
        estd_date = data.get('estd_date')
        country = data.get('country')
        state = data.get('state')
        city = data.get('city')
        pincode = data.get('pincode')
        email = data.get('email')
        phone = data.get('phone')

    # Create a new organization object
        new_org = Organization(
            name=name,
            about=about,
            org_size=org_size,
            org_type=org_type,
            estd_date=estd_date,
            country=country,
            state=state,
            city=city,
            pincode=pincode,
            email=email,
            phone=phone
        )
         # Extract data from the request
    name = data.get('name')
    about = data.get('about')
    org_size = data.get('org_size')
    org_type = data.get('org_type')
    estd_date = data.get('estd_date')
    country = data.get('country')
    state = data.get('state')
    city = data.get('city')
    pincode = data.get('pincode')
    email = data.get('email')
    phone = data.get('phone')

    # Create a new organization object
    new_org = Organization(
        name=name,
        about=about,
        org_size=org_size,
        org_type=org_type,
        estd_date=estd_date,
        country=country,
        state=state,
        city=city,
        pincode=pincode,
        email=email,
        phone=phone
    )

    # Add and commit the new organization to the database
    db.session.add(new_org)
    db.session.commit()

    return jsonify({"message": f"Organization {name} created successfully!"})

@app.route("/api/event", methods=['POST'])
def save_event():
    if not session.get("loggedIn"):
        return jsonify({"message": "User is not authenticated"}), 401
    else:
        data = request.get_json()
        
        # Extract data from the request
        name = data.get('name')
        about = data.get('about')
        event_type = data.get('type')
        hash_tag = data.get('hash_tag')
        started_date = data.get('started_date')
        end_date = data.get('end_date')
        country = data.get('country')
        state = data.get('state')
        city = data.get('city')
        pincode = data.get('pincode')

        # Validate required fields
        if not name or not started_date or not end_date:
            return jsonify({"message": "Name, start date, and end date are required fields"}), 400

        # Create a new event object
        new_event = Event(
            name=name,
            about=about,
            type=event_type,
            hash_tag=hash_tag,
            started_date=started_date,
            end_date=end_date,
            country=country,
            state=state,
            city=city,
            pincode=pincode
        )

        # Add and commit the new event to the database
        db.session.add(new_event)
        db.session.commit()

        return jsonify({"message": f"Event {name} created successfully!"}), 201

@app.route("/api/certificate", methods=['POST'])
def create_certificate():
    # Check if the user is logged in
    if not session.get("loggedIn"):
        return jsonify({"message": "User is not authenticated"}), 401
    
    # Extract data from the request body
    data = request.get_json()

    # Extract data for certificate (adjust fields based on your Certificate model)
    recipient_name = data.get('recipient_name')
    event_name = data.get('event_name')
    issued_date = data.get('issued_date')
    certificate_type = data.get('certificate_type')  # E.g., Participation, Completion, etc.
    
    # Validate required fields
    if not recipient_name or not event_name or not issued_date:
        return jsonify({"message": "Recipient name, event name, and issued date are required fields"}), 400

    # Create a new certificate object
    new_certificate = Certificate(
        recipient_name=recipient_name,
        event_name=event_name,
        issued_date=issued_date,
        certificate_type=certificate_type
    )

    # Add and commit the new certificate to the database
    db.session.add(new_certificate)
    db.session.commit()

    # Return a success message
    return jsonify({"message": f"Certificate for {recipient_name} issued successfully!"}), 201





if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=True)