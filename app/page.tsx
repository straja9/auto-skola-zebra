'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import ContactMap from './components/ContactMap';

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className={`min-h-screen bg-black text-white ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`}>
      {/* Header */}
      <header className="fixed w-full z-50 bg-black/80 backdrop-blur-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-12 h-12 relative">
              <Image 
                src="/images/logo.png" 
                alt="Auto Škola Zebra Logo" 
                width={48} 
                height={48} 
                className="object-contain"
              />
            </div>
            <span className="text-xl font-bold">Auto Škola <span className="text-yellow-400">Zebra</span></span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-yellow-400 rounded-bl-full opacity-50 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-yellow-400 rounded-tr-full opacity-30 blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 pt-32 h-full flex flex-col md:flex-row items-center relative z-10">
          <div className="md:w-1/2 space-y-6 transform translate-y-0 md:translate-y-0 transition-transform duration-1000 ease-out animate-fadeIn">
            <h1 className="text-4xl md:text-6xl font-bold">
              <span className="text-yellow-400">Auto Škola</span> Zebra
              <br />
            </h1>
            <p className="text-lg text-gray-300 max-w-md">
              Naučite da vozite sa samopouzdanjem uz našu profesionalnu obuku i moderne metode.
            </p>
            <button className="bg-yellow-400 text-black px-8 py-3 rounded-full font-medium hover:bg-yellow-300 transition-colors transform hover:scale-105 duration-300">
              Zakaži čas vožnje
            </button>
          </div>
          
          <div className="md:w-1/2 mt-12 md:mt-0 relative transform translate-y-12 md:translate-y-0 transition-transform duration-1000 ease-out delay-300 animate-slideInRight">
            <div className="relative w-full h-[300px] md:h-[400px]">
              <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/80 z-10 rounded-xl"></div>
              <div className="w-full h-full flex items-center justify-center">
                <Image 
                  src="/images/car.png" 
                  alt="Auto Škola Zebra vozilo" 
                  width={400} 
                  height={250} 
                  className="object-contain z-20 transform hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Zašto izabrati <span className="text-yellow-400">Zebra</span> auto školu?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-black/50 p-8 rounded-xl border border-gray-800 hover:border-yellow-400 transition-colors group">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 group-hover:text-yellow-400 transition-colors">Profesionalni instruktori</h3>
              <p className="text-gray-400">Naši instruktori imaju višegodišnje iskustvo i strpljenje da vas nauče svim veštinama vožnje.</p>
            </div>
            
            <div className="bg-black/50 p-8 rounded-xl border border-gray-800 hover:border-yellow-400 transition-colors group">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 group-hover:text-yellow-400 transition-colors">Moderna vozila</h3>
              <p className="text-gray-400">Vozite najnovije modele automobila opremljene svim sigurnosnim sistemima.</p>
            </div>
            
            <div className="bg-black/50 p-8 rounded-xl border border-gray-800 hover:border-yellow-400 transition-colors group">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 group-hover:text-yellow-400 transition-colors">Visoka prolaznost</h3>
              <p className="text-gray-400">Preko 95% naših polaznika položi vozački ispit iz prvog pokušaja.</p>
            </div>
          </div>
        </div>
      </section>


      {/* Testimonials Section */}
      <section className="py-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute -top-32 -right-32 w-64 h-64 bg-yellow-400 rounded-full opacity-10 blur-3xl"></div>
          <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-yellow-400 rounded-full opacity-10 blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Šta kažu naši <span className="text-yellow-400">polaznici</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-900 p-8 rounded-xl border border-gray-800 hover:border-yellow-400 transition-all hover:shadow-xl hover:shadow-yellow-400/10 group">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                  <span className="text-black font-bold text-xl">MJ</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold group-hover:text-yellow-400 transition-colors">Marko Jovanović</h3>
                  <p className="text-gray-400">B kategorija</p>
                </div>
              </div>
              <p className="text-gray-300 italic">&quot;Odlična auto škola sa profesionalnim pristupom. Instruktor je bio strpljiv i detaljno mi objasnio sve što me je interesovalo. Položio sam iz prvog pokušaja!&quot;</p>
              <div className="mt-4 flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
            
            <div className="bg-gray-900 p-8 rounded-xl border border-gray-800 hover:border-yellow-400 transition-all hover:shadow-xl hover:shadow-yellow-400/10 group">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                  <span className="text-black font-bold text-xl">JP</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold group-hover:text-yellow-400 transition-colors">Jovana Petrović</h3>
                  <p className="text-gray-400">B kategorija</p>
                </div>
              </div>
              <p className="text-gray-300 italic">&quot;Bila sam veoma nervozna pre prvog časa, ali zahvaljujući stručnosti i smirenosti mog instruktora, brzo sam stekla samopouzdanje. Preporučujem svima!&quot;</p>
              <div className="mt-4 flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
            
            <div className="bg-gray-900 p-8 rounded-xl border border-gray-800 hover:border-yellow-400 transition-all hover:shadow-xl hover:shadow-yellow-400/10 group">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                  <span className="text-black font-bold text-xl">NS</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold group-hover:text-yellow-400 transition-colors">Nikola Stanković</h3>
                  <p className="text-gray-400">A kategorija</p>
                </div>
              </div>
              <p className="text-gray-300 italic">&quot;Obuka za motocikl je bila temeljita i bezbedna. Instruktori su iskusni vozači koji znaju kako da prenesu znanje. Sada sa zadovoljstvom vozim svoj motor.&quot;</p>
              <div className="mt-4 flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Instructors Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Naši <span className="text-yellow-400">instruktori</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-black/50 p-8 rounded-xl border border-gray-800 hover:border-yellow-400 transition-colors group text-center">
              <div className="w-32 h-32 mx-auto mb-6 relative group-hover:scale-105 transition-transform duration-300">
                <Image 
                  src="/images/instructor.png" 
                  alt="Instruktor Milan" 
                  width={128} 
                  height={128} 
                  className="rounded-full"
                />
                <div className="absolute inset-0 rounded-full border-2 border-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-yellow-400 transition-colors">Ćira</h3>
              <p className="text-gray-400 mb-4">Predavač</p>
              <p className="text-gray-300">Preko 15 godina iskustva u obuci vozača B kategorije.</p>
            </div>
            
            <div className="bg-black/50 p-8 rounded-xl border border-gray-800 hover:border-yellow-400 transition-colors group text-center">
              <div className="w-32 h-32 mx-auto mb-6 relative group-hover:scale-105 transition-transform duration-300">
                <Image 
                  src="/images/instructor.png" 
                  alt="Instruktorka Ana" 
                  width={128} 
                  height={128} 
                  className="rounded-full"
                />
                <div className="absolute inset-0 rounded-full border-2 border-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-yellow-400 transition-colors">Nikola Nedić</h3>
              <p className="text-gray-400 mb-4">Instruktor B kategorije</p>
              <p className="text-gray-300">Sladak kao medić.</p>
            </div>
            
            <div className="bg-black/50 p-8 rounded-xl border border-gray-800 hover:border-yellow-400 transition-colors group text-center">
              <div className="w-32 h-32 mx-auto mb-6 relative group-hover:scale-105 transition-transform duration-300">
                <Image 
                  src="/images/instructor.png" 
                  alt="Instruktor Dejan" 
                  width={128} 
                  height={128} 
                  className="rounded-full"
                />
                <div className="absolute inset-0 rounded-full border-2 border-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-yellow-400 transition-colors">Stefan Bošković</h3>
              <p className="text-gray-400 mb-4">Instruktor A kategorije</p>
              <p className="text-gray-300">Profesionalni motociklista sa bogatim iskustvom u obuci vozača motora.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden" id="kategorije">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-32 right-32 w-96 h-96 bg-yellow-400 rounded-full opacity-5 blur-3xl"></div>
          <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-yellow-400 rounded-full opacity-10 blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Vozačke <span className="text-yellow-400">kategorije</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* AM Kategorija */}
            <div className="bg-gradient-to-br from-gray-900 to-black p-6 rounded-xl border border-gray-800 hover:border-yellow-400 transition-all hover:shadow-xl hover:shadow-yellow-400/10 group">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                  <span className="text-black font-bold text-xl">AM</span>
                </div>
                <h3 className="text-xl font-bold group-hover:text-yellow-400 transition-colors">Mopedi i laki tricikli</h3>
              </div>
              <div className="space-y-3 text-gray-300 text-sm">
                <p><span className="text-yellow-400 font-semibold">Potrebno:</span> Lična karta i navršenih 15 godina</p>
                <p><span className="text-yellow-400 font-semibold">Obuka:</span> 40 časova teorije i 7 časova praktične obuke</p>
                <p><span className="text-yellow-400 font-semibold">Polaganje:</span> Teorijski ispit nakon obuke, praktični sa 16 godina</p>
              </div>
            </div>
            
            {/* A1 Kategorija */}
            <div className="bg-gradient-to-br from-gray-900 to-black p-6 rounded-xl border border-gray-800 hover:border-yellow-400 transition-all hover:shadow-xl hover:shadow-yellow-400/10 group">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                  <span className="text-black font-bold text-xl">A1</span>
                </div>
                <h3 className="text-xl font-bold group-hover:text-yellow-400 transition-colors">Motocikli do 125cm³</h3>
              </div>
              <div className="space-y-3 text-gray-300 text-sm">
                <p><span className="text-yellow-400 font-semibold">Potrebno:</span> Lična karta, lekarsko uverenje i 15 godina</p>
                <p><span className="text-yellow-400 font-semibold">Obuka:</span> Teorijska i praktična obuka</p>
                <p><span className="text-yellow-400 font-semibold">Polaganje:</span> Teorijski ispit nakon obuke, praktični sa 16 godina</p>
              </div>
            </div>
            
            {/* A2 Kategorija */}
            <div className="bg-gradient-to-br from-gray-900 to-black p-6 rounded-xl border border-gray-800 hover:border-yellow-400 transition-all hover:shadow-xl hover:shadow-yellow-400/10 group">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                  <span className="text-black font-bold text-xl">A2</span>
                </div>
                <h3 className="text-xl font-bold group-hover:text-yellow-400 transition-colors">Motocikli do 35kW</h3>
              </div>
              <div className="space-y-3 text-gray-300 text-sm">
                <p><span className="text-yellow-400 font-semibold">Potrebno:</span> Lična karta, lekarsko uverenje i 17 godina</p>
                <p><span className="text-yellow-400 font-semibold">Obuka:</span> Teorijska i praktična obuka</p>
                <p><span className="text-yellow-400 font-semibold">Polaganje:</span> Teorijski ispit nakon obuke, praktični sa 18 godina</p>
              </div>
            </div>
            
            {/* A Kategorija */}
            <div className="bg-gradient-to-br from-gray-900 to-black p-6 rounded-xl border border-gray-800 hover:border-yellow-400 transition-all hover:shadow-xl hover:shadow-yellow-400/10 group">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                  <span className="text-black font-bold text-xl">A</span>
                </div>
                <h3 className="text-xl font-bold group-hover:text-yellow-400 transition-colors">Motocikli</h3>
              </div>
              <div className="space-y-3 text-gray-300 text-sm">
                <p><span className="text-yellow-400 font-semibold">Potrebno:</span> Lična karta, lekarsko uverenje i 23 godine</p>
                <p><span className="text-yellow-400 font-semibold">Obuka:</span> Teorijska i praktična obuka</p>
                <p><span className="text-yellow-400 font-semibold">Polaganje:</span> Teorijski ispit nakon obuke, praktični sa 24 godine</p>
              </div>
            </div>
            
            {/* B Kategorija */}
            <div className="bg-gradient-to-br from-gray-900 to-black p-6 rounded-xl border border-gray-800 hover:border-yellow-400 transition-all hover:shadow-xl hover:shadow-yellow-400/10 group">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                  <span className="text-black font-bold text-xl">B</span>
                </div>
                <h3 className="text-xl font-bold group-hover:text-yellow-400 transition-colors">Putnička vozila</h3>
              </div>
              <div className="space-y-3 text-gray-300 text-sm">
                <p><span className="text-yellow-400 font-semibold">Potrebno:</span> Lična karta, lekarsko uverenje i 16 godina</p>
                <p><span className="text-yellow-400 font-semibold">Obuka:</span> 40 časova teorije i 40 časova praktične obuke</p>
                <p><span className="text-yellow-400 font-semibold">Polaganje:</span> Teorijski ispit nakon obuke, praktični sa 17 godina</p>
              </div>
            </div>
            
            {/* BE Kategorija */}
            <div className="bg-gradient-to-br from-gray-900 to-black p-6 rounded-xl border border-gray-800 hover:border-yellow-400 transition-all hover:shadow-xl hover:shadow-yellow-400/10 group">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                  <span className="text-black font-bold text-xl">BE</span>
                </div>
                <h3 className="text-xl font-bold group-hover:text-yellow-400 transition-colors">Vozila B sa prikolicom</h3>
              </div>
              <div className="space-y-3 text-gray-300 text-sm">
                <p><span className="text-yellow-400 font-semibold">Opis:</span> Skup vozila čije vučno vozilo pripada kategoriji B, a priključno vozilo ima najveću dozvoljenu masu veću od 750 kg, a nije veća od 3.500 kg</p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* C1 Kategorija */}
            <div className="bg-gradient-to-br from-gray-900 to-black p-6 rounded-xl border border-gray-800 hover:border-yellow-400 transition-all hover:shadow-xl hover:shadow-yellow-400/10 group">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                  <span className="text-black font-bold text-xl">C1</span>
                </div>
                <h3 className="text-xl font-bold group-hover:text-yellow-400 transition-colors">Teretna vozila do 7.5t</h3>
              </div>
              <div className="space-y-3 text-gray-300 text-sm">
                <p><span className="text-yellow-400 font-semibold">Potrebno:</span> Lična karta, lekarsko uverenje, B kategorija</p>
                <p><span className="text-yellow-400 font-semibold">Obuka:</span> 7 časova teorije i 10 časova praktične obuke</p>
                <p><span className="text-yellow-400 font-semibold">Polaganje:</span> Teorijski ispit nakon obuke, praktični sa 18 godina</p>
              </div>
            </div>
            
            {/* C Kategorija */}
            <div className="bg-gradient-to-br from-gray-900 to-black p-6 rounded-xl border border-gray-800 hover:border-yellow-400 transition-all hover:shadow-xl hover:shadow-yellow-400/10 group">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                  <span className="text-black font-bold text-xl">C</span>
                </div>
                <h3 className="text-xl font-bold group-hover:text-yellow-400 transition-colors">Teretna vozila</h3>
              </div>
              <div className="space-y-3 text-gray-300 text-sm">
                <p><span className="text-yellow-400 font-semibold">Potrebno:</span> Lična karta, lekarsko uverenje, B kategorija i 20 godina</p>
                <p><span className="text-yellow-400 font-semibold">Obuka:</span> 7 časova teorije i 15 časova praktične obuke</p>
                <p><span className="text-yellow-400 font-semibold">Polaganje:</span> Teorijski ispit nakon obuke, praktični sa 21 godinom</p>
              </div>
            </div>
            
            {/* D1 Kategorija */}
            <div className="bg-gradient-to-br from-gray-900 to-black p-6 rounded-xl border border-gray-800 hover:border-yellow-400 transition-all hover:shadow-xl hover:shadow-yellow-400/10 group">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                  <span className="text-black font-bold text-xl">D1</span>
                </div>
                <h3 className="text-xl font-bold group-hover:text-yellow-400 transition-colors">Mini-bus</h3>
              </div>
              <div className="space-y-3 text-gray-300 text-sm">
                <p><span className="text-yellow-400 font-semibold">Potrebno:</span> Lična karta, lekarsko uverenje, C1 kategorija 2 godine i 20 godina</p>
                <p><span className="text-yellow-400 font-semibold">Obuka:</span> 7 časova teorije i 10 časova praktične obuke</p>
                <p><span className="text-yellow-400 font-semibold">Polaganje:</span> Teorijski ispit nakon obuke, praktični sa 21 godinom</p>
              </div>
            </div>
            
            {/* D Kategorija */}
            <div className="bg-gradient-to-br from-gray-900 to-black p-6 rounded-xl border border-gray-800 hover:border-yellow-400 transition-all hover:shadow-xl hover:shadow-yellow-400/10 group">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                  <span className="text-black font-bold text-xl">D</span>
                </div>
                <h3 className="text-xl font-bold group-hover:text-yellow-400 transition-colors">Autobus</h3>
              </div>
              <div className="space-y-3 text-gray-300 text-sm">
                <p><span className="text-yellow-400 font-semibold">Potrebno:</span> Lična karta, lekarsko uverenje, C kategorija 2 godine i 23 godine</p>
                <p><span className="text-yellow-400 font-semibold">Obuka:</span> 7 časova teorije i 10 časova praktične obuke</p>
                <p><span className="text-yellow-400 font-semibold">Polaganje:</span> Teorijski ispit nakon obuke, praktični sa 24 godine</p>
              </div>
            </div>
          </div>
          
          <div className="mt-12 bg-black/30 p-6 rounded-xl border border-gray-800">
            <h3 className="text-xl font-bold mb-4 text-yellow-400">Ograničenja probne vozačke dozvole (B kategorija):</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Može se koristiti samo na teritoriji Republike Srbije</li>
              <li>Zabrana upravljanja vozilom u periodu od 23:00-05:00</li>
              <li>Zabrana upotrebe telefona i drugih sredstava za komunikaciju</li>
              <li>Brzina kretanja vozila ne sme biti veća od 90% od dozvoljene brzine</li>
              <li>Vozilo mora biti označeno posebnom oznakom &quot;P&quot;</li>
              <li>Vozač mlađi od 18 godina mora biti pod nadzorom lica sa B kategorijom najmanje 5 godina</li>
              <li>Sa probnom vozačkom dozvolom nije moguće upisati obuku za druge kategorije</li>
            </ul>
          </div>
        </div>
      </section>
      
      {/* Vehicle Gallery Section */}
      <section className="py-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-32 right-32 w-96 h-96 bg-yellow-400 rounded-full opacity-5 blur-3xl"></div>
          <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-yellow-400 rounded-full opacity-10 blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Naša <span className="text-yellow-400">vozila</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-800 hover:border-yellow-400 transition-all hover:shadow-xl hover:shadow-yellow-400/10 group">
              <div className="h-48 mb-4 overflow-hidden rounded-lg relative group-hover:scale-[1.02] transition-transform duration-300">
                <Image 
                  src="/images/car-polo.png" 
                  alt="Vozilo za B kategoriju" 
                  width={400} 
                  height={200} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute bottom-0 left-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-bold">B kategorija</span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-yellow-400 transition-colors">Volkswagen Polo</h3>
              <p className="text-gray-300">Moderno vozilo sa dvostrukim komandama, idealno za obuku vozača B kategorije.</p>
            </div>
            
            <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-800 hover:border-yellow-400 transition-all hover:shadow-xl hover:shadow-yellow-400/10 group">
              <div className="h-48 mb-4 overflow-hidden rounded-lg relative group-hover:scale-[1.02] transition-transform duration-300">
                <Image 
                  src="/images/car.png" 
                  alt="Vozilo za B kategoriju" 
                  width={400} 
                  height={200} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute bottom-0 left-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-bold">B kategorija</span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-yellow-400 transition-colors">Volkswagen Golf</h3>
              <p className="text-gray-300">Pouzdano vozilo sa svim potrebnim sigurnosnim sistemima za bezbednu obuku.</p>
            </div>
            
            <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-800 hover:border-yellow-400 transition-all hover:shadow-xl hover:shadow-yellow-400/10 group">
              <div className="h-48 mb-4 overflow-hidden rounded-lg relative group-hover:scale-[1.02] transition-transform duration-300">
                <Image 
                  src="/images/motor.png" 
                  alt="Vozilo za A kategoriju" 
                  width={400} 
                  height={200} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute bottom-0 left-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-bold">A kategorija</span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-yellow-400 transition-colors">Honda CBF 600</h3>
              <p className="text-gray-300">Motocikl srednje snage, savršen za obuku vozača A kategorije.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-yellow-400 text-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Spremni da započnete svoju vozačku avanturu?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Pridružite se hiljadama zadovoljnih vozača koji su naučili da voze u Auto Školi Zebra.</p>
          <button className="bg-black text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors transform hover:scale-105 duration-300 mx-2">
            Kontaktirajte nas
          </button>
          <button className="bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors transform hover:scale-105 duration-300 mx-2 mt-4 md:mt-0">
            Pogledaj lokacije
          </button>
        </div>
      </section>

      {/* Location Section with Google Map */}
      <section className="py-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-32 right-32 w-96 h-96 bg-yellow-400 rounded-full opacity-5 blur-3xl"></div>
          <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-yellow-400 rounded-full opacity-10 blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Gde se <span className="text-yellow-400">nalazimo</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="bg-black/50 p-6 rounded-xl border border-gray-800">
                <h3 className="text-xl font-bold mb-4 text-yellow-400">Adresa</h3>
                <p className="text-gray-300">Vojvode Mišića 31</p>
                <p className="text-gray-300">15000 Šabac, Srbija</p>
              </div>
              
              <div className="bg-black/50 p-6 rounded-xl border border-gray-800">
                <h3 className="text-xl font-bold mb-4 text-yellow-400">Kontakt informacije</h3>
                <p className="text-gray-300">Tel: 015/347 270</p>
                <p className="text-gray-300">Mob: 066/347 270</p>
                <p className="text-gray-300">e-mail: zebra.autoskola@gmail.com</p>
              </div>
              
              <div className="bg-black/50 p-6 rounded-xl border border-gray-800">
                <h3 className="text-xl font-bold mb-4 text-yellow-400">Radno vreme</h3>
                <p className="text-gray-300">Ponedeljak - Petak: 07:00 - 16:00</p>
                <p className="text-gray-300">Subota: 09:00 - 15:00</p>
                <p className="text-gray-300">Nedelja: Zatvoreno</p>
              </div>
            </div>
            
            <div>
              <ContactMap className="shadow-lg shadow-yellow-400/10" />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 relative">
                  <div className="absolute inset-0 bg-yellow-400 rounded-full transform -rotate-12"></div>
                  <div className="absolute inset-0 flex items-center justify-center font-bold text-black text-lg">Z</div>
                </div>
                <span className="text-lg font-bold">Auto Škola <span className="text-yellow-400">Zebra</span></span>
              </div>
              <p className="text-gray-400">Profesionalna auto škola još od 1992. godine.</p>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-4">Brzi linkovi</h4>
              <ul className="space-y-2">
                <li className="text-gray-400">Početna</li>
                <li className="text-gray-400">Kursevi</li>
                <li className="text-gray-400">Kontakt</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-4">Kontakt</h4>
              <ul className="space-y-2">
                <li className="text-gray-400">Kancelarija :</li>
                <li className="text-gray-400">Vojvode Mišić 31</li>
                <li className="text-gray-400">15000 Šabac, Serbia</li>
                <li className="text-gray-400">Tel: 015/347 270</li>
                <li className="text-gray-400">Mob: 066/ 347 270</li>
                <li className="text-gray-400">e-mail: zebra.autoskola@gmail.com</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-4">Radno vreme</h4>
              <ul className="space-y-2">
                <li className="text-gray-400">Ponedeljak - Petak: 07:00 - 16:00</li>
                <li className="text-gray-400">Subota: 09:00 - 15:00</li>
                <li className="text-gray-400">Nedelja: Zatvoreno</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center text-gray-500">
            <p>&copy; {new Date().getFullYear()} Auto Škola Zebra. Sva prava zadržana.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
