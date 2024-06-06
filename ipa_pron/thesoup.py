import requests
from bs4 import BeautifulSoup
from fake_useragent import UserAgent
from requests.adapters import HTTPAdapter
from requests.packages.urllib3.util.retry import Retry

def get_pronunciation_link(word):
    print(f"get: {word}")
    base_url = "https://dictionary.cambridge.org/dictionary/english/"
    url = base_url + word

    ua = UserAgent()
    headers = {'User-Agent': ua.random}

    retries = Retry(total=5, backoff_factor=1, status_forcelist=[500, 502, 503, 504])
    adapter = HTTPAdapter(max_retries=retries)

    with requests.Session() as session:
        session.mount('http://', adapter)
        session.mount('https://', adapter)

        try:
            response = session.get(url, headers=headers)
            response.raise_for_status()

            soup = BeautifulSoup(response.text, 'html.parser')
            audio_tag = soup.find('audio', {'id': 'audio2'})
            
            if audio_tag:
                source_tag = audio_tag.find('source', {'src': lambda s: s and s.startswith('/media/english/us_pron')})
                if source_tag:
                    mp3_link = source_tag['src']
                    return mp3_link

        except requests.exceptions.HTTPError as errh:
            print("HTTP Error:", errh)
        except requests.exceptions.ConnectionError as errc:
            print("Error Connecting:", errc)
        except requests.exceptions.Timeout as errt:
            print("Timeout Error:", errt)
        except requests.exceptions.RequestException as err:
            print("Oops! Something went wrong:", err)

    return None

def get_ipa_pronunciation(word):
    print(f"get IPA pronunciation: {word}")
    base_url = "https://dictionary.cambridge.org/dictionary/english/"
    url = base_url + word

    ua = UserAgent()
    headers = {'User-Agent': ua.random}

    retries = Retry(total=5, backoff_factor=1, status_forcelist=[500, 502, 503, 504])
    adapter = HTTPAdapter(max_retries=retries)

    with requests.Session() as session:
        session.mount('http://', adapter)
        session.mount('https://', adapter)

        try:
            response = session.get(url, headers=headers)
            response.raise_for_status()

            soup = BeautifulSoup(response.text, 'html.parser')
            dpron_span = soup.find('span', {'class': 'us dpron-i'})
            
            if dpron_span:
                ipa_span = dpron_span.find('span', {'class': 'ipa dipa lpr-2 lpl-1'})
                if ipa_span:
                    ipa_text = ipa_span.get_text(strip=True)
                    return ipa_text

        except requests.exceptions.HTTPError as errh:
            print("HTTP Error:", errh)
        except requests.exceptions.ConnectionError as errc:
            print("Error Connecting:", errc)
        except requests.exceptions.Timeout as errt:
            print("Timeout Error:", errt)
        except requests.exceptions.RequestException as err:
            print("Oops! Something went wrong:", err)

    return None


def main():
    input_file = 'words.txt'
    output_file_mp3 = 'mp3links.txt'
    output_file_ipa = 'IPA.txt'

    with open(input_file, 'r') as f_input, open(output_file_mp3, 'w', encoding='utf-8') as f_output_mp3, open(output_file_ipa, 'w', encoding='utf-8') as f_output_ipa:
        for line in f_input:
            word = line.strip()
            pronunciation_link = get_pronunciation_link(word)

            if pronunciation_link:
                full_link = "https://dictionary.cambridge.org" + pronunciation_link
                f_output_mp3.write(f"{full_link}\n")
            else:
                f_output_mp3.write(f"Pronunciation link not found\n")
            ipa_pronunciation = get_ipa_pronunciation(word)
            if ipa_pronunciation:
                f_output_ipa.write(f"{ipa_pronunciation}\n")
            else:
                f_output_ipa.write("IPA pronunciation not found\n")

if __name__ == "__main__":
    main()
