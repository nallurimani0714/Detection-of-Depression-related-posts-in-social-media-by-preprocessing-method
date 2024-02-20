import pandas as pd
import zipfile
pd.set_option('display.max_columns', 500)
data = None
def retrieve():
        df = pd.read_csv('osn.txt', sep=',')
        return df

