import csv
import requests
from requests.exceptions import ConnectionError, Timeout, RequestException
import os
import sys

API_URL = "http://localhost:5039/api/WordBank"
CSV_DIR = "csv"


def import_words(filename):
    if filename == "all":
        csv_files = [f for f in os.listdir(CSV_DIR) if f.endswith(".csv")]
        if not csv_files:
            print("❌ No CSV files found in the csv/ directory.")
            sys.exit(1)
        for file in csv_files:
            print(f"\n Importing from {file} ...")
            import_words(file)
        return

    csv_file = os.path.join(CSV_DIR, filename)
    if not os.path.exists(csv_file):
        print(f"❌ File not found: {filename}")
        print("File must be in the csv/ directory")
        sys.exit(1)  # exit script with error code

    with open(csv_file, newline='', encoding="utf-8") as f:
        reader = csv.DictReader(f)

        for row in reader:
            payload = {
                "english": row.get("english"),
                "kky": row.get("kky") or None,
                "tsc": row.get("tsc") or None,
                "category": row.get("category"),
                "submittedBy": row.get("submitted by") or None
            }
            try:
                response = requests.post(f"{API_URL}/add", json=payload)
                data = response.json()
                message = data.get("message")
                if response.status_code == 200:
                    print("✅", message)
                else:
                    print("❌", message)
            except ConnectionError:
                print("❌ Server is offline or unreachable.")


if __name__ == "__main__":
    # test()
    csv_file = input(
        "CSV Name (example a_words.csv or all to import all .csv): ")
    import_words(csv_file)
