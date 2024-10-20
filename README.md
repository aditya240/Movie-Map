# Movie-Map

Movie-Map is a React-based app that allows you to discover, track, and manage your favorite movies. It provides an intuitive interface for searching movies and keeping a record of those you have watched, along with ratings and summaries.

## Features

- **Search for Movies**: Use the search bar to find movies by title.
- **Results Display**: View the number of results found (e.g., "Found 8 results").
- **Movie List (Left Box)**: Browse movies returned from the OMDb API based on your search query.
- **Watched Movies Summary (Right Box)**: Track the movies you've watched, including:
  - Total number of movies watched.
  - Average IMDb rating.
  - Average user rating.
  - Average runtime.
- **Detailed Movie View (Right Box)**: Select a movie from the Movie List to view additional details:
  - Plot, director, actors, release date.
  - Rate the movie out of 10 stars.
  - Add movie to Watched List after you have rated it.
  - View the ratings you gave a movie if it is already present in the watched list
- **Manage Watched List**: Remove movies using the "red cross" next to watched movies on the list

## Getting Started

Follow these steps to get the project running on your local machine.

### Prerequisites

Make sure you have the following installed:

- **Node.js**: [Download and install Node.js](https://nodejs.org/)
- **npm** (Node Package Manager) or **yarn**: npm comes with Node.js, but you can also install [yarn](https://yarnpkg.com/getting-started/install) if preferred.

#### Creating the .env File

To use the OMDb API, you need to create a `.env` file in the root directory of the project:

1. In the root directory, create a file named `.env`.
2. Add your OMDb API key as follows:

   ```plaintext
   REACT_APP_API_KEY=your_api_key_here
   ```

#### Getting an OMdB API Key

1. Visit the [OMDb API website](https://www.omdbapi.com/apikey.aspx?__EVENTTARGET=freeAcct&__EVENTARGUMENT=&__LASTFOCUS=&__VIEWSTATE=%2FwEPDwUKLTIwNDY4MTIzNQ9kFgYCAQ9kFgICBw8WAh4HVmlzaWJsZWhkAgIPFgIfAGhkAgMPFgIfAGhkGAEFHl9fQ29udHJvbHNSZXF1aXJlUG9zdEJhY2tLZXlfXxYDBQtwYXRyZW9uQWNjdAUIZnJlZUFjY3QFCGZyZWVBY2N0oCxKYG7xaZwy2ktIrVmWGdWzxj%2FDhHQaAqqFYTiRTDE%3D&__VIEWSTATEGENERATOR=5E550F58&__EVENTVALIDATION=%2FwEdAAU%2BO86JjTqdg0yhuGR2tBukmSzhXfnlWWVdWIamVouVTzfZJuQDpLVS6HZFWq5fYpioiDjxFjSdCQfbG0SWduXFd8BcWGH1ot0k0SO7CfuulHLL4j%2B3qCcW3ReXhfb4KKsSs3zlQ%2B48KY6Qzm7wzZbR&at=freeAcct&Email=).
2. Create a free API key.
3. Paste it into the `.env` file you created earlier.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/MovieMap.git
   ```

2. Navigate to the project directory:

   ```bash
   cd MovieMap
   ```

3. Install the required dependencies:

   Using npm:
   ```bash
   npm install
   ```

   Or using yarn:
   ```bash
   yarn install
   ```

### Running the Project

To run the project locally:

1. Start the development server:

   Using npm:
   ```bash
   npm start
   ```

   Or using yarn:
   ```bash
   yarn start
   ```

2. Open your browser and navigate to `http://localhost:3000` to view the app.

## Usage

1. **Search for a Movie**: Enter the name of a movie in the search bar.
2. **View Results**: Check the results count and browse through the list of movies displayed.
3. **Select a Movie**: Click on a movie to view detailed information including plot, director, and cast.
4. **Rate a Movie**: If you’ve watched the movie, you can rate it out of 10 stars and add it to your watched list.
5. **Manage Watched Movies**: View your watched movies summary, including average ratings (IMDb and personal), average runtime, and total counts, and remove any movies you no longer wish to track from the Watched List using the red cross.

## Example

- You search for "Inception," and the app displays a list of movies related to your query.
- Upon selecting "Inception," you can read its plot, see who directed it, and rate it out of 10 stars. Once you rate it, the button to add it to your watched list will be displayed.
- Your watched movies summary will update, reflecting the new average IMDb rating, user rating and run-time.
- On selecting "Inception again from the list of movies (left box) you can view the rating you gave it.
- On the list of watched movie (right box) there is a "red cross" next to each movie using which you can remove it from the list of watched movies

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **CSS**: For styling the app.
- **OMDb API**: For movie data retrieval.

## Screenshots

Here are some screenshots of the app in action:

<img width="1512" alt="Screenshot 2024-10-20 at 7 37 12 PM" src="https://github.com/user-attachments/assets/122e7799-d7ca-403d-a99a-6387268c2f6f">
<img width="1512" alt="Screenshot 2024-10-20 at 7 37 47 PM" src="https://github.com/user-attachments/assets/4fdf4385-a278-44e9-b3c1-a712a694d288">
<img width="1512" alt="Screenshot 2024-10-20 at 7 38 47 PM" src="https://github.com/user-attachments/assets/f0cb9a1b-3539-4fdd-9e95-f19a63777e80">
<img width="1512" alt="Screenshot 2024-10-20 at 7 39 22 PM" src="https://github.com/user-attachments/assets/1db39185-7546-4a8c-8435-ff5db768bbd2">
<img width="1512" alt="Screenshot 2024-10-20 at 7 39 47 PM" src="https://github.com/user-attachments/assets/63010d48-f4f9-4a1d-8ea5-598657c567a2">
<img width="1512" alt="Screenshot 2024-10-20 at 7 40 30 PM" src="https://github.com/user-attachments/assets/c4f16ae8-ebda-49da-906c-ec1ab8d21fd2">
<img width="1512" alt="Screenshot 2024-10-20 at 7 40 55 PM" src="https://github.com/user-attachments/assets/efcce943-fb27-4768-a97c-f36efd6da906">
<img width="1512" alt="Screenshot 2024-10-20 at 7 41 02 PM" src="https://github.com/user-attachments/assets/4a04d502-1f64-419c-bfe6-61579dfce758">
<img width="1512" alt="Screenshot 2024-10-20 at 7 43 00 PM" src="https://github.com/user-attachments/assets/2fa7b0c2-5b53-4072-a6ae-efaed60cbf54">
<img width="1512" alt="Screenshot 2024-10-20 at 7 43 12 PM" src="https://github.com/user-attachments/assets/4b543c7d-453e-4308-9acc-c1f6c8a1084b">

## Author

- **Aditya Jaiswal** - [GitHub](https://github.com/aditya240)

---

Thank you for checking out Movie-Map! If you have any questions or feedback, feel free to open an issue or reach out! Enjoy exploring your movie collection!
