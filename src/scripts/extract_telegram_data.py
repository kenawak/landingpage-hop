from bs4 import BeautifulSoup

def extract_data_from_html(file_path):
    with open(file_path, 'r', encoding='utf-8') as file:
        soup = BeautifulSoup(file, 'html.parser')

    messages = soup.find_all('div', class_='message default clearfix')
    extracted_data = []

    for message in messages:
        text_div = message.find('div', class_='text')
        text_content = text_div.get_text(strip=True) if text_div else "No text content"

        media_wrap = message.find('div', class_='media_wrap')
        media_url = None
        if media_wrap:
            photo_wrap = media_wrap.find('a', class_='photo_wrap' or 'video_file')
            if photo_wrap:
                media_url = photo_wrap['href']

        extracted_data.append({
            'text': text_content,
            'media_url': media_url
        })

    return extracted_data

if __name__ == "__main__":
    file_path = '/home/keo/.var/app/org.telegram.desktop/data/TelegramDesktop/tdata/temp_data#2/ChatExport_2025-03-14 (1)/messages.html'  # Update this path
    data = extract_data_from_html(file_path)
    for item in data:
        print(item) 