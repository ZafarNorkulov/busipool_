// import connectDB from "@/config/database";
// import User from "@/models/User";
// import GoogleProvider from "next-auth/providers/google";
// import CredentialsProvider from "next-auth/providers/credentials";

// export const authOptions = {
//   providers: [
//     GoogleProvider({
//       clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
//       clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET,
//       authorization: {
//         params: {
//           prompt: "consent",
//           access_type: "offline",
//           response_type: "code",
//         },
//       },
//     }),
//     CredentialsProvider({
//       name: "Credentials",
//       credentials: {
//         username: { label: "Username", type: "text" },
//         password: { label: "Password", type: "password" },
//       },
//       async authorize(credentials) {
//         await connectDB(); // Bazaga ulanish
//         const user = await User.findOne({ username: credentials.username });
//         console.log(user)
//         if (user) {
//           // Parolni haqiqiy tekshirish uchun hashing kutubxonasidan foydalaning!
//           return { id: user._id, email: user.email };
//         }

//         // Agar foydalanuvchi topilmasa yoki parol xato bo‘lsa, null qaytariladi
//         return null;
//       },
//     }),
//   ],

//   callbacks: {
//     async jwt({ token, user, account }) {
//       if (account) {
//         token.accessToken = account.access_token;
//       }
//       if (user) {
//         token.id = user.id;
//         token.email = user.email;
//       }
//       return token;
//     },

//     async session({ session, token }) {
//       session.user = {
//         id: token.id,
//         email: token.email,
//       };
//       session.accessToken = token.accessToken;
//       return session;
//     },

//     async signIn({ profile, account }) {
//       if (account.provider === "google") {
//         await connectDB(); // Bazaga ulanish

//         const userExists = await User.findOne({ email: profile.email });

//         if (!userExists) {
//           // Foydalanuvchini qo‘shish
//           const username = profile.name.slice(0, 20);

//           await User.create({
//             email: profile.email,
//             username,
//             image: profile.picture,
//           });
//         }
//       }

//       // Har doim `true` qaytarib, sign-in ni davom ettirish
//       return true;
//     },
//   },

//   pages: {
//     signIn: "/auth/signin", // Custom sign-in sahifasi
//     error: "/auth/error", // Xato sahifasi
//   },

//   session: {
//     strategy: "jwt", // Sessiyalar JWT asosida boshqariladi
//   },

//   secret: process.env.NEXTAUTH_SECRET, // Maxfiy kalitni sozlash
// };
