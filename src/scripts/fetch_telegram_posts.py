import os
import requests
from bs4 import BeautifulSoup
from urllib.parse import urljoin, urlparse

def fetch_telegram_posts(channel_name, num_posts=5):
    url = f"https://t.me/s/{channel_name}"
    response = requests.get(url)
    
    if response.status_code != 200:
        print(f"Failed to fetch data from {url}")
        return []

    soup = BeautifulSoup(response.text, 'html.parser')
    posts = soup.find_all('div', class_='tgme_widget_message_wrap', limit=num_posts)
    
    post_data = []
    for post in posts:
        text = post.find('div', class_='tgme_widget_message_text')
        text_content = text.get_text() if text else "No text content"
        
        media = post.find('a', class_='tgme_widget_message_photo')
        media_url = media['style'].split("url('")[1].split("')")[0] if media else None
        
        post_data.append({
            'text': text_content,
            'media_url': media_url
        })
    
    return post_data

def download_media(media_url, save_dir):
    if not media_url:
        return None
    
    response = requests.get(media_url, stream=True)
    if response.status_code == 200:
        filename = os.path.basename(urlparse(media_url).path)
        filepath = os.path.join(save_dir, filename)
        
        with open(filepath, 'wb') as file:
            for chunk in response.iter_content(1024):
                file.write(chunk)
        
        return filepath
    return None

if __name__ == "__main__":
    print("runnning....")
    channel_name = "homeofprojects"  # Replace with the actual channel name
    save_dir = "src/assets"
    os.makedirs(save_dir, exist_ok=True)
    
    posts = fetch_telegram_posts(channel_name)
    
    for i, post in enumerate(posts, start=1):
        print(f"Post {i}: {post}\n")
        if post['media_url']:

            media_path = download_media(post['media_url'], save_dir)
            if media_path:
                print(f"Media saved to {media_path}\n") 