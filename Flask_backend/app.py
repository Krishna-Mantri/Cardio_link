from flask import Flask, jsonify, request,send_file
from cardiolink import run_cardiolink_pipeline
from flask_cors import CORS
import os

app = Flask(__name__)
CORS(app)


@app.route('/')
def index():
    return "CardioLink Flask API is running!"


@app.route('/generate-report', methods=['GET'])
def generate_report():
    try:
        result = run_cardiolink_pipeline()

        if not os.path.exists(result):
            return jsonify({"error": "PDF file not found"}), 404

        return send_file(result, as_attachment=True)
        # return jsonify({"message": "Report generated!", "result": result}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
