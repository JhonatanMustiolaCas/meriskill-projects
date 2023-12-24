import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score


def prediction(source):
    data = pd.read_csv("./diabetes.csv")
    X = data.drop("Outcome", axis=1)
    Y = data["Outcome"]
    X_train, X_test, Y_train, Y_test = train_test_split(X, Y, test_size=0.2)

    model = LogisticRegression(solver="newton-cg", max_iter=3000)
    model.fit(X_train.values, Y_train.values)

    prediction_user = model.predict([source])
    prediction_test = model.predict(X_test)
    accuracy = accuracy_score(prediction_test, Y_test)

    return (prediction_user[0], accuracy)
