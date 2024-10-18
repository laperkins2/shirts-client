# Shirts For Sale

This project is a Next.js application that serves as an online store for shirts. Users can browse a collection of shirts, view details for each item, and soon, make purchases. The app is styled using Tailwind CSS and utilizes React Query for data fetching.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Components](#components)
- [Environment Variables](#environment-variables)
- [License](#license)
- [Acknowledgements](#acknowledgements)

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

   Open [http://localhost:3000](http://localhost:3000) to view the app in your browser.

## Usage

### Home Page

- Displays a list of available shirts with images, descriptions, and prices.
- Users can click on a shirt to view its details.

### Shirt Details Page

- Shows detailed information about a specific shirt, including an enlarged image, full description, and price.

## Features

- Responsive design with Tailwind CSS.
- Fetches data from a Supabase backend using Axios and React Query.
- Loading and error states are handled gracefully.

## Components

- **Home:** Displays the list of shirts.
- **ShirtDetail:** Shows detailed information for a selected shirt.
- **Providers:** Wraps the application in a React Query provider for state management.
- **Spinner:** Custom spinner component for loading states.

## Environment Variables

To configure the application, create a `.env.local` file in the root directory and set the following variables:

```env
NEXT_PUBLIC_API_URL=your_api_url
NEXT_PUBLIC_API_KEY=your_api_key
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

- Next.js documentation
- Tailwind CSS documentation
- React Query documentation
- Supabase documentation

Feel free to customize and expand this README based on your specific needs and project details!
