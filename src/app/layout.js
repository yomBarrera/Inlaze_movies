import { Inter } from "next/font/google";
import "./globals.css";

import { MoviesProvider } from "@/utils/movies-provider";
import { ThemeProvider } from "@/utils/theme-provider";

import SimpleSlider from "@/components/ui/Slider";
import { Header } from "@/components/header/Header";
import { Search } from "@/components/sidebar/Search";
import { OrderList } from "@/components/sidebar/OrderList";
import { GenreList } from "@/components/sidebar/GenreList";

import { getMoviesGenre, getMoviesTrending } from "@/libs/funtions";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Inlaze Movies",
  description: "List on the best movies today",
};

const optionsB = [
  { value: 'original_title.asc', label: 'Title A -Z' },
  { value: 'popularity.asc', label: 'popularity Ascending' },
  { value: 'popularity.desc', label: 'popularity Descending' },
  { value: 'vote_average.asc', label: 'Rating Ascending' },
  { value: 'vote_average.desc', label: 'Rating Descending' },
  { value: 'primary_release_date.asc', label: 'release Date Ascending' },
  { value: 'primary_release_date.desc', label: 'release Date Descending' },
];

export default async function RootLayout({ children }) {

  const optionsGEnre = await getMoviesGenre()
  const optionsBanner = await getMoviesTrending()

  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content='Dark' />
      </head>
      <ThemeProvider>
        <MoviesProvider>
          <body className={inter.className}>
            <Header />
            <SimpleSlider options={optionsBanner} />

            <div className="flex">
              <section className="sidebar">
                <Search />
                <OrderList title='Sort By' options={optionsB} />
                <GenreList title='Genres' options={optionsGEnre} />
              </section>
              <main>
                {children}
              </main>
            </div>
          </body>
        </MoviesProvider>
      </ThemeProvider>
    </html>
  );
}
