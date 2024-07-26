import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";

export default function Home() {
    return (
        <main className="font-light text-center">
            <About />
            <Experience />
            <Projects />
            <Contact />
        </main>
    );
}
