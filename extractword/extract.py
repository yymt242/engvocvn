import string
import re

def contains_vietnamese_characters(word):
    vietnamese_characters = "əǝıæɔăằắẳẵặâầấẩẫậđĐêềếểễệôồốổỗộơờớởỡợưừứửữựùúủũụèéẻẽẹòóỏõọàáảãạìíỉĩịĂẰẮẲẴẶÂẦẤẨẪẬÊỀẾỂỄỆÔỒỐỔỖỘƠỜỚỞỠỢƯỪỨỬỮỰÙÚỦŨỤÈÉẺẼẸÒÓỎÕỌÀÁẢÃẠÌÍỈĨỊ…”“ʺỳýỷỹỵỲÝỶỴỸ1234567890°ɑɐɒæɓʙβɔɕçɗɖðʤəɘɚɛɜɝɞɟʄɡɠɢʛɦɧħɥʜɨɪʝɭɬɫɮʟɱɯɰŋɳɲɴøɵɸθœɶʘɹɺɾɻʀʁɽʂʃʈʧʉʊʋⱱʌɣɤʍχʎʏʑʐʒʔʡʕʢǀǁǂǃˈˌːˑʼʴʰʱʲʷˠˤ˞n̥d̥ŋ̊b̤a̤t̪d̪s̬t̬b̰a̰t̺d̺t̼d̼t̻d̻t̚ɔ̹ẽɔ̜u̟e̠ël̴n̴ɫe̽e̝ɹ̝m̩n̩l̩e̞β̞e̯e̘e̙ĕe̋éēèȅx͜xx͡xзąûî"
    engchar = "abcdefghijklmnopqrstuvwxyz"
    return not all(char in engchar for char in word)

def extract_unique_words(input_file, output_file):
    try:
        # Read from the input file with UTF-8 encoding
        with open(input_file, 'r', encoding='utf-8') as file:
            content = file.read()

        # Remove specified punctuation marks
        for char in string.punctuation:
            content = content.replace(char, '')

        # Split the content into words
        words = content.split()

        # Remove words that contain Vietnamese characters
        words = [word for word in words if not contains_vietnamese_characters(word)]

        # Remove words that are numbers
        words = [word for word in words if not word.isdigit()]

        # Extract unique words using a set and convert to a sorted list
        unique_words = sorted(set(words))

        # Write unique words to the output file with UTF-8 encoding
        with open(output_file, 'w', encoding='utf-8') as file:
            for word in unique_words:
                file.write(word + '\n')

        print(f"Unique words (without punctuation, numbers, and Vietnamese characters) written to {output_file}")

    except FileNotFoundError:
        print(f"Error: File '{input_file}' not found.")
    except Exception as e:
        print(f"An error occurred: {e}")

# Specify the input and output file names
input_file_name = 'text_chunk.txt'
output_file_name = 'unique.txt'

# Call the function to extract and write unique words
extract_unique_words(input_file_name, output_file_name)
