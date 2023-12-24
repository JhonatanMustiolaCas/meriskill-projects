import pandas as pd

if __name__ == "__main__":
    try:
        data_frame = pd.read_csv("Sales Data.csv")
        data_frame.head()
    except Exception:
        print("There was an error while reading the csv file")

    data_frame["Order Date"] = pd.to_datetime(data_frame["Order Date"])

    data_frame["Month"] = data_frame["Order Date"].dt.month
    data_frame["Hour"] = data_frame["Order Date"].dt.hour
    del data_frame["Order Date"]

    print(data_frame.dtypes)

    data_frame.to_csv("./cleaned-sales-data.csv", index=False, index_label=None)
