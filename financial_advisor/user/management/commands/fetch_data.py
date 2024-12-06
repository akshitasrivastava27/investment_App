from django.core.management.base import BaseCommand
from alpha_vantage.timeseries import TimeSeries
import os

class Command(BaseCommand):
    help = 'Fetch NASDAQ Composite historical data'

    def handle(self, *args, **kwargs):
        # Replace 'YOUR_API_KEY' with your actual Alpha Vantage API key
        api_key = 'NPQ1B99QXIBAJKM9'

        try:
            # Initialize TimeSeries object
            ts = TimeSeries(key=api_key, output_format='pandas')

            # Fetch data for the original symbol
            print("Fetching data for MSFT...")
            data, meta_data = ts.get_daily(symbol='MSFT', outputsize='full')

            # Test fetching data for another symbol to verify API response
            print("Testing with a new symbol (AAPL)...")
            test_data, test_meta_data = ts.get_daily(symbol='AAPL', outputsize='full')
            print("Test Data Head for AAPL:", test_data.head())

            # Save data for the original symbol to a CSV
            output_file = os.path.join('data', 'nasdaq_data.csv')
            os.makedirs('data', exist_ok=True)
            data.to_csv(output_file)

            self.stdout.write(self.style.SUCCESS(f'Data successfully saved to {output_file}'))

        except ValueError as ve:
            self.stdout.write(self.style.ERROR(f"ValueError: {ve}"))
        except FileNotFoundError as fnfe:
            self.stdout.write(self.style.ERROR(f"FileNotFoundError: {fnfe}"))
        except Exception as e:
            self.stdout.write(self.style.ERROR(f"An unexpected error occurred: {e}"))
