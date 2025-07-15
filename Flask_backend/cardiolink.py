# cardiolink.py
import numpy as np
import matplotlib.pyplot as plt
from tensorflow.keras.models import load_model
from sklearn.preprocessing import MinMaxScaler
import os
from supabase_config import supabase
from report_generator import generate_pdf_report
import datetime

def run_cardiolink_pipeline():
    timestamp = datetime.datetime.now().strftime(f"%Y%m%d_%H%M%S")

    # ------------------------------
    # ✅ Load Model
    # ------------------------------
    model_path = "final_ecg_cnn_lstm_model.h5"
    if not os.path.exists(model_path):
        raise FileNotFoundError("Model not found.")
    model = load_model(model_path)

    # ------------------------------
    # ✅ Supabase Data Fetch
    # ------------------------------
    def fetch_latest_data():
        response = supabase.table("heart_monitor_data").select("*").order("created_at", desc=True).limit(1).execute()
        if not response.data:
            raise ValueError("🚫 No data found in Supabase!")
        row = response.data[0]
        return row["heart_rate"], row["spo2"], row["hrv"]

    HR, SpO2, HRV = fetch_latest_data()
    print(f"Fetched Data - HR: {HR}, SpO2: {SpO2}, HRV: {HRV}")

    # ------------------------------
    # ✅ ECG Simulation
    # ------------------------------
    def generate_synthetic_ecg(num_samples=200):
        t = np.linspace(0, 1, num_samples)
        ecg = np.sin(2 * np.pi * 1.0 * t) + 0.5 * np.sin(2 * np.pi * 3.0 * t) + 0.1 * np.random.randn(num_samples)
        return ecg

    ecg_data = generate_synthetic_ecg().reshape(1, -1)
    ecg_data = MinMaxScaler().fit_transform(ecg_data.T).T.reshape(1, -1, 1)

    predictions = model.predict(ecg_data)
    predicted_class = int(np.argmax(predictions))
    confidence = float(predictions[0][predicted_class])
    threshold = 0.75
    anomaly_detected = confidence < threshold

    result_text = (
        f"{'Anomaly Detected!' if anomaly_detected else 'Normal ECG'}\n"
        f"Predicted Class: {predicted_class}\n"
        f"Confidence Score: {confidence:.2f}"
    )

    # ------------------------------
    # ✅ Plot Data and Save
    # ------------------------------
    time = np.arange(0, 200)
    hrv = np.random.normal(HRV, 3, 200)
    spo2 = np.random.normal(SpO2, 1, 200)
    bpm = np.random.normal(HR, 4, 200)
    anomaly_indices = np.random.choice(time, 10, replace=False)
    hrv[anomaly_indices] -= 0.3
    spo2[anomaly_indices] -= 2
    bpm[anomaly_indices] += 10

    paths = []

    def save_plot(data, title, ylabel, color, path):
        plt.figure(figsize=(10, 4))
        plt.plot(time, data, label=title, color=color)
        plt.scatter(anomaly_indices, data[anomaly_indices], color="red")
        plt.title(title)
        plt.ylabel(ylabel)
        plt.xlabel("Time")
        plt.legend()
        plt.savefig(path)
        plt.close()
        return (title, path)

    paths.append(save_plot(hrv, "Heart Rate Variability", "HRV (ms)", "blue", f"results/hrv_plot_{timestamp}.png"))
    paths.append(save_plot(spo2, "Oxygen Saturation", "SpO₂ (%)", "green", f"results/spo2_plot_{timestamp}.png"))
    paths.append(save_plot(bpm, "Heart Rate", "BPM", "purple", f"results/bpm_plot_{timestamp}.png"))

    # ------------------------------
    # ✅ Generate Report
    # ------------------------------
    output_pdf = f"results/anomaly_report_{timestamp}.pdf"
    generate_pdf_report(result_text, paths, hrv, spo2, bpm, output_path=output_pdf)

    # return {
    #     "message": "✅ Report generated successfully.",
    #     "result_text": result_text,
    #     "report_path": output_pdf,
    #     "timestamp": timestamp,
    #     "paths": paths,
    #     "HR": HR,
    #     "SpO2": SpO2,
    #     "HRV": HRV,
    #     "predicted_class": predicted_class,
    #     "confidence": confidence,
    # }
    return output_pdf
# run_cardiolink_pipeline()