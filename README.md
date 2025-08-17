
# Contact Page Component

This is a React component for a simple contact form built using **Tailwind CSS** and **React Toastify** for notifications. The component submits form data to **Web3Forms** API.

## Features

- Clean and responsive design using Tailwind CSS.
- Toast notifications for success and error messages.
- Simple form with name, email, and message fields.
- Background contrast: black page background with a white form card.

## Installation

1. Ensure you have a React project set up.
2. Install dependencies:
```bash
npm install react-toastify
```
3. Add Tailwind CSS to your project if not already installed.

## Usage

1. Import the component:
```javascript
import Contact from './Contact';
```
2. Include it in your JSX:
```jsx
<Contact />
```
3. The form will send submissions to Web3Forms using the provided access key.

## Customization

- **Access Key:** Replace the access key in the component with your Web3Forms access key.
- **Styling:** Modify Tailwind classes to match your preferred colors or spacing.
- **Notifications:** Adjust `toast` settings (position, autoClose duration) as needed.

## Dependencies

- `react`
- `react-toastify`
- `tailwindcss`

## Notes

- The outer background is set to black for contrast, while the form itself is white.
- Ensure `react-toastify/dist/ReactToastify.css` is imported for proper toast styling.
