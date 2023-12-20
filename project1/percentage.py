print("Met dit programma kan je eenvoudig je resultaat in % omzetten.")
print("---")

behaaldePunten = int(input("Wat is je resultaat? "))
totaalAantalPunten = int(input("Wat het maximum aantal punten voor deze toets? "))

consoleOutput = behaaldePunten / (totaalAantalPunten / 10) * 10

print('Je hebt ' + str(round(consoleOutput, 2)) + '% behaald.')