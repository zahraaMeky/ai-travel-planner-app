<div align="center">
  <img src="https://github.com/user-attachments/assets/390cec99-5e38-44d8-9332-ab1a4da76a62" alt="Project Banner">
  <br />
</div>
<br />
<div align="center">
  <img src="https://img.shields.io/badge/-Next_JS-black?style=for-the-badge&logoColor=white&logo=nextdotjs&color=000000" alt="nextdotjs" />
  <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="tailwindcss" />
  <img src="https://img.shields.io/badge/-TypeScript-black?style=for-the-badge&logoColor=white&logo=typescript&color=3178C6" alt="typescript" />
  <img src="https://img.shields.io/badge/-Gemini-black?style=for-the-badge&logoColor=white&logo=gemini&color=FF4500" alt="gemini" />
  <img src="https://img.shields.io/badge/-Clerk-black?style=for-the-badge&logoColor=white&logo=clerk&color=0A0A0A" alt="clerk" />
</div>

<h3 align="center">📝 AI Content Generator App</h3>
<br/>

<div align="left">
  Welcome to the AI Content Generator Application! This application harnesses the power of AI to assist users in generating high-quality content across various platforms. Whether you're a blogger, YouTuber, Instagram influencer, or developer, this app will help you create compelling content with ease.
</div>
<br/><br/>

<div>
  ✨ **Features**<br/>
  - **📝 Blog Title Generation:** Generate catchy and SEO-friendly blog titles.<br/>
  - **📄 Blog Content Creation:** Create well-structured and engaging blog posts.<br/>
  - **💡 Blog Topic Ideas:** Get innovative ideas for your next blog post.<br/>
  - **🎥 YouTube SEO Tools:** Generate optimized YouTube titles, descriptions, and tags.<br/>
  - **✍️ Rewrite Articles:** Improve and rewrite existing articles for better readability and SEO.<br/>
  - **🔧 Text Improvement:** Enhance the quality and clarity of your text.<br/>
  - **😊 Add Emojis to Text:** Make your text more engaging by adding relevant emojis.<br/>
  - **📸 Instagram Post Generator:** Create captivating Instagram posts.<br/>
  - **#️⃣ Instagram Hashtag Generator:** Generate effective hashtags for Instagram posts.<br/>
  - **💡 Instagram Post/Reel Ideas:** Get creative ideas for Instagram posts and reels.<br/>
  - **🔤 English Grammar Check:** Ensure your content is grammatically correct.<br/>
  - **💻 Write Code:** Generate code snippets for various programming tasks.<br/>
  - **❓ Explain Code:** Get explanations for code snippets to understand how they work.<br/>
  - **🐛 Code Bug Detector:** Identify and fix bugs in your code.<br/>
  - **🏷️ Tagline Generator:** Create catchy taglines for your brand or product.<br/>
  - **📝 Product Descriptions:** Write detailed and persuasive product descriptions.
</div>
<br/><br/>

<div>
  ## 🛠️ Technologies Used<br/>
  - **Next.js:** A React framework for server-side rendering and generating static websites. [https://nextjs.org/](https://nextjs.org/)<br/>
  - **Gemini:** An advanced AI platform for content generation. [https://gemini.com/](https://gemini.com/)<br/>
  - **Tailwind CSS:** A utility-first CSS framework for styling. [https://tailwindcss.com/](https://tailwindcss.com/)<br/>
  - **TypeScript:** A typed superset of JavaScript that compiles to plain JavaScript. [https://typescriptlang.org/](https://typescriptlang.org/)<br/>
  - **Clerk:** A user management and authentication service. [https://clerk.dev/](https://clerk.dev/)<br/>
  - **Drizzle ORM:** A lightweight and efficient TypeScript Object-Relational Mapper (ORM) that prioritizes developer experience. It includes a command-line interface (CLI) tool called Drizzle Kit for database migrations. [https://orm.drizzle.team/](https://orm.drizzle.team/)
</div>
<br/><br/>

<div>
  ## 🚀 Getting Started<br/>

1. **Clone the repository:**
    ```bash
    git clone https://github.com/yourusername/ai-content-generator.git
    ```

2. **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

3. **Add environment variables:**
    Create a `.env.local` file in the root directory and add your environment variables. Example:
    ```env
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=<Your Clerk Publishable Key>
    CLERK_SECRET_KEY=<Your Clerk Secret Key>
    NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
    NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
    NEXT_PUBLIC_GEMINI_API_KEY=<Your Gemini API Key>
    NEXT_PUBLIC_DRIZZLE_DB_URL=<Your Drizzle ORM Database URL>
    NEXT_PUBLIC_PAYPAL_CLIENT_ID=<Your PayPal Client ID>
    NEXT_PUBLIC_PAYPAL_CLIENT_SECRET=<Your PayPal Client Secret>
    ```

4. **Run the development server:**
    ```bash
    npm run dev
    # or
    yarn dev
    ```
    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
</div>
<br/><br/>

<div>
  ## 🗂️ Project Structure <br/>

- `app/`: Main application pages and layouts.<br/>
- `utils/`: Backend API routes for Gemini.<br/>
- `auth/`: Authentication-related data and routes for Clerk.<br/>
- `components/`: Reusable React components.<br/>
- `constants/`: Application-wide constants.<br/>
- `context/`: Context providers for updating user credentials.<br/>
- `data/`: Template arrays and static data.<br/>
- `globals.css/`: Global styles and Tailwind CSS configuration.<br/>
- `lib/`: Utility functions.<br/>
- `public/`: Static files and assets.<br/>
- `schema/`: Database table schemas for Drizzle ORM.<br/>
- `types/`: TypeScript interfaces and types.<br/>

## 🔒 Protected Routes<br/><br/>

The application uses Clerk for authentication. Certain routes are protected and require users to be logged in. If a user is not authenticated, they will be redirected to the login page.<br/><br/>

## 🔄 Fetching Data<br/>

Data is fetched from the Gemini API. While data is being fetched, a loading animation is displayed to enhance user experience.<br/><br/>

## 📅 Content Generation<br/>

Users can generate various types of content using the AI-powered tools. The system ensures high-quality and relevant outputs tailored to user requirements.
</div>
<br/><br/>

<div>
  ## 📧 Contact<br/>

For any inquiries, please reach out to [eng.alzahraa.meky@gmail.com](mailto:eng.alzahraa.meky@gmail.com).<br/>
or contact via WhatsApp at +96899495057.

---

Visit the live application at [ai-content-generator-app.netlify.app](https://ai-content-generator-app.netlify.app/)
</div>
