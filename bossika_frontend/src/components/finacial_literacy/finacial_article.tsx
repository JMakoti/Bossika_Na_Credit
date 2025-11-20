import { ArrowRight, Settings, LogOut } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import articles from "../../data/articles.json";
import { Button } from "../ui/button";
import { Link } from "react-router";
import { useState, useEffect } from "react";

// Mock user data - replace with actual authentication context
const user = { name: "John Doe" };

// Mock logout handler - replace with actual authentication logic
const handleLogout = () => {
  console.log("Logout clicked");
};

export default function FinancialArticle() {
  return (
    <div>
      <header className="bg-white border-b shadow-sm h-24 p-3">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
          <div className="flex items-center justify-between py-3 sm:h-16">
            <div className="flex-1 min-w-0">
              <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 truncate">
                <Link to="/dashboard" className="">Bossika Na Credit</Link>
              </h1>
              <p className="text-xs sm:text-sm text-gray-600 truncate">
                Welcome back,{" "}
                <span className="font-semibold text-blue-600">
                  {user?.name || "User"}
                </span>
              </p>
            </div>
            <div className="flex items-center gap-1 sm:gap-2 ml-2">
              <Link
                to="/literacy"
                className="text-sm font-medium text-gray-700 hover:text-gray-900 hover:underline hidden sm:inline px-3"
              >
                Financial Literacy
              </Link>
              <Button
                variant="outline"
                size="sm"
                className="text-gray-700 hover:text-white-900 hidden sm:flex"
              >
                <Settings className="h-4 w-4 sm:mr-2" />
                <span className="hidden sm:inline">Settings</span>
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="sm:hidden text-gray-700"
              >
                <Settings className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={handleLogout}
                className="text-red-600 hover:text-red-700 hover:bg-red-50 border-red-200 hidden sm:flex"
              >
                <LogOut className="h-4 w-4 sm:mr-2" />
                <span className="hidden sm:inline">Logout</span>
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={handleLogout}
                className="sm:hidden text-red-600 border-red-200"
              >
                <LogOut className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="flex flex-col items-center justify-center my-10">
        <h2 className="text-4xl font-bold mb-4">Financial Insights</h2>
        <p className="text-lg text-gray-600 mb-8 text-center max-w-2xl">
          Expert analysis and market intelligence to guide your investment
          decisions
        </p>

        <div className="grid md:grid-cols-3 gap-8 w-full p-8">
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </div>
    </div>
  );
}

function ArticleCard({ article }: { article: any }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <Card className="border rounded-lg overflow-hidden hover:shadow-lg w-full transition-all duration-300 hover:-translate-y-1">
      <CardHeader className="p-0 m-0 flex-shrink-0">
        <div className="relative">
          <img
            src={article.thumbnail}
            alt={article.title}
            className="w-full h-52 object-cover"
          />
          <div className="absolute top-3 left-3">
            <span className="bg-blue-600 text-white px-2 py-1 text-xs rounded">
              {article.category}
            </span>
          </div>
        </div>
        <CardTitle className="text-xl font-semibold px-3 mt-3 line-clamp-2">
          {article.title}
        </CardTitle>
        <CardDescription className="text-gray-600 mb-2 px-3 line-clamp-3">
          {article.summary}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex justify-between items-center mt-2">
        <div className="text-sm text-gray-500">
          {article.readTime} • {article.date}
        </div>
        <Button variant="link" className="p-0" asChild>
          <Link
            to={article.link}
            className="flex gap-1 items-center text-primary font-medium"
          >
            Read More <ArrowRight size={16} />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}
