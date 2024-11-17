from django.core.management.base import BaseCommand
from alpha_vantage.timeseries import TimeSeries
import pandas as pd
import os


class Command(BaseCommand):
    help = 'Fetch NASDAQ Composite historical data'

    def handle(self, *args, **kwargs):
        # Replace 'YOUR_API_KEY' with your actual Alpha Vantage API key
        api_key = 'NPQ1B99QXIBAJKM9'

        try:
            # Initialize TimeSeries object
            ts = TimeSeries(key=api_key, output_format='pandas')

            # Attempt to retrieve data
            data, meta_data = ts.get_daily(symbol='MSFT', outputsize='full')

            # Save data to CSV
            output_file = os.path.join('data', 'nasdaq_data.csv')
            os.makedirs('data', exist_ok=True)
            data.to_csv(output_file)

            self.stdout.write(self.style.SUCCESS(f'Data successfully saved to {output_file}'))

        except ValueError as ve:
            # Handle specific Alpha Vantage errors like invalid API key or parameters
            self.stdout.write(self.style.ERROR(f"ValueError: {ve}"))
        except FileNotFoundError as fnfe:
            # Handle file system-related issues
            self.stdout.write(self.style.ERROR(f"FileNotFoundError: {fnfe}"))
        except Exception as e:
            # Catch any other unforeseen errors
            self.stdout.write(self.style.ERROR(f"An unexpected error occurred: {e}"))
