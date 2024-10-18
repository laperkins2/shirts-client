# Frontend Shirts Description and Sale Price

This is a frontend interface for a shirt collection, showcasing descriptions and prices. Users can browse through the shirts, with plans for a purchasing feature in the future. The project is built using Next.js and styled with Tailwind CSS.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Available Scripts](#available-scripts)
- [License](#license)

## Installation

### Prerequisites

Make sure you have the following installed on your local machine:

- Node.js (version 14.x or higher)
- npm or yarn for package management

### Steps

1. Clone the repository:

   ```sh
   git clone https://github.com/yourusername/shirts-for-sale.git
   ```

2. Navigate to the project directory:

   ```sh
   cd shirts-for-sale
   ```

3. Install the dependencies:

   ```sh
   npm install
   ```

4. Create a `.env.local` file in the root directory and add your environment variables:

   ```env
   NEXT_PUBLIC_API_URL=your_api_url
   NEXT_PUBLIC_API_KEY=your_api_key
   ```

5. Start the development server:

   ```sh
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

## Usage

- **Home Page:** Displays the app title and provides access to the shirt collection.
- **Shirts Page:** Lists available shirts sorted alphabetically, each featuring an image, description, and price.
- **Shirt Details Page:** Click on any shirt to view a larger picture, full description, and price.
- **Checkout Page:** Coming soon!

## API Integration

This project connects to a backend API to fetch and display data about the shirts.

- **Shirts Endpoint:** Fetches all shirts and can fetch or delete by ID.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

- Next.js documentation
- Instructor Thomas Basham
- Tailwind CSS documentation
