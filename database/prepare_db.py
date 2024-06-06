import pandas as pd
import random

# Read the Excel file
df = pd.read_excel('data.xlsx')

# Function to generate the output format for each row
def generate_output(question, options, correct_answer, score, example, pos, pron, ipa, verb, noun, adjective, adverb, v2, v3, plural_noun, uc_noun):
    # Randomly select the position for the correct answer
    correct_answer_position = random.randint(0, 3)
    # Shuffle the options to avoid bias
    random.shuffle(options)
    # Insert the correct answer at the randomly selected position
    options.insert(correct_answer_position, correct_answer)
    # Format the output string
    output = "{ question: '" + str(question) + "', options: " + str(options) \
    + ", correctAnswer: " + str(correct_answer_position) \
    + ", score: " + str(score) \
    + ", conti: false" \
    + ", count: 0" \
    + ", example: '" + str(example) \
    + "', pos: '" + str(pos) \
    + "', pron: '" + str(pron) \
    + "', ipa: '" + str(ipa) \
    + "', verb: '" + str(verb) \
    + "', noun: '" + str(noun) \
    + "', adjective: '" + str(adjective) \
    + "', adverb: '" + str(adverb) \
    + "', v2: '" + str(v2) \
    + "', v3: '" + str(v3) \
    + "', plural_noun: '" + str(plural_noun) \
    + "', uc_noun: '" + str(uc_noun) \
    + "' },\n"
    return output

# Open a text file to write the output with UTF-8 encoding
question_column = df['question']
answer_column = df['answer']

with open('output.txt', 'w', encoding='utf-8') as file:
    # Iterate through each row in the DataFrame
    for index, row in df.iterrows():
        quest = row['question']
        # Select correct answer
        correct_answer = row['answer']
        # Select random incorrect options
        #options = df['answer'].sample(n=3, replace = False).tolist()
        options_df = df[df['answer'] != correct_answer]
    # Sample options from filtered DataFrame
        options = options_df['answer'].sample(n=3, replace=False).tolist()
        # options = random.choice(df['answer'], 3)
        # Generate the output format for the current row
        output = generate_output(quest, options, correct_answer, row['score'], row['example'], row['pos'], row['pron'], row['ipa'], row['verb'], row['noun'], row['adjective'], row['adverb'], row['v2'], row['v3'], row['plural_noun'], row['uc_noun'])
        # Write the output to the text file
        file.write(output)

print("Output written to output.txt")
