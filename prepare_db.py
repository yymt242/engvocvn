import pandas as pd
import random

# Read the Excel file
df = pd.read_excel('data.xlsx')

# Function to generate the output format for each row
def generate_output(question, options, correct_answer):
    # Randomly select the position for the correct answer
    correct_answer_position = random.randint(0, 3)
    # Randomly select 3 inccorect options from the 'options' list
    random_options = options #random.sample(options, 3)
    # Insert the correct answer at the randomly selected position
    random_options.insert(correct_answer_position, correct_answer)
    # Format the output string
    output = "{ question: '" + question + "', options: " + str(random_options) + ", correctAnswer: " + str(correct_answer_position) + " },\n"
    return output

# Open a text file to write the output with UTF-8 encoding
question_column = df['question']
answer_column = df['answer']
with open('output.txt', 'w', encoding='utf-8') as file:
    # Iterate through each row in the DataFrame

    for index, row in df.iterrows():
        # Split the 'answer' cell into individual options
        options = [answer_column[random.randint(0, 69)], answer_column[random.randint(0, 69)], answer_column[random.randint(0, 69)]]
        # Randomly select one option as the correct answer
        correct_answer = row['answer']
        # Generate the output format for the current row
        output = generate_output(row['question'], options, correct_answer)
        # Write the output to the text file
        file.write(output)

print("Output written to output.txt")
