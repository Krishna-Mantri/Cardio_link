import Header from "@/components/Header";
import PatientInfo from "@/components/PatientInfo";
import LiveGraph from "@/components/LiveGraph";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-3xl mx-auto space-y-6">
        <Header />
        <PatientInfo />
        <LiveGraph />
        <Footer />
      </div>
    </main>
  );
}
