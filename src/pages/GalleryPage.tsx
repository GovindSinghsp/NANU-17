import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useSupabaseData } from '../hooks/useSupabaseData';
import { GalleryImage } from '../lib/supabase';
import { updatePageSEO } from '../utils/seo';

const GalleryPage: React.FC = () => {
  const { data: galleryImages, loading } = useSupabaseData<GalleryImage>('gallery_images', {
    orderBy: 'created_at',
    ascending: false
  });

  const [filteredImages, setFilteredImages] = useState<GalleryImage[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [currentProjectImages, setCurrentProjectImages] = useState<string[]>([]);

  // Sample images for demonstration
  const sampleImages: GalleryImage[] = [
    {
      id: '1',
      title: 'Corporate Annual Conference',
      description: 'Large-scale corporate event with 500+ attendees',
      image_url: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg',
      category: 'corporate',
      tags: ['conference', 'corporate', 'large-scale'],
      is_featured: true,
      project_image_1: 'https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg',
      project_image_2: 'https://images.pexels.com/photos/1708936/pexels-photo-1708936.jpeg',
      project_image_3: 'https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg',
      project_image_4: 'https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg'
    },
    {
      id: '2',
      title: 'Product Launch Event',
      description: 'Innovative product launch with interactive displays',
      image_url: 'https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg',
      category: 'product-launch',
      tags: ['product-launch', 'innovation', 'technology'],
      is_featured: true,
      project_image_1: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg',
      project_image_2: 'https://images.pexels.com/photos/2833037/pexels-photo-2833037.jpeg',
      project_image_3: 'https://images.pexels.com/photos/1708936/pexels-photo-1708936.jpeg'
    },
    {
      id: '3',
      title: 'Team Building Workshop',
      description: 'Engaging team building activities and workshops',
      image_url: 'https://images.pexels.com/photos/1708936/pexels-photo-1708936.jpeg',
      category: 'team-building',
      tags: ['team-building', 'workshop', 'engagement'],
      is_featured: false,
      project_image_1: 'https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg',
      project_image_2: 'https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg'
    },
    {
      id: '4',
      title: 'Retail Brand Activation',
      description: 'Interactive retail experience and brand activation',
      image_url: 'https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg',
      category: 'retail',
      tags: ['retail', 'branding', 'activation'],
      is_featured: true,
      project_image_1: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg',
      project_image_2: 'https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg',
      project_image_3: 'https://images.pexels.com/photos/1708936/pexels-photo-1708936.jpeg',
      project_image_4: 'https://images.pexels.com/photos/2833037/pexels-photo-2833037.jpeg',
      project_image_5: 'https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg'
    },
    {
      id: '5',
      title: 'Executive Dinner',
      description: 'Elegant executive dinner with premium ambiance',
      image_url: 'https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg',
      category: 'corporate',
      tags: ['dinner', 'executive', 'elegant'],
      is_featured: false,
      project_image_1: 'https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg',
      project_image_2: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg'
    },
    {
      id: '6',
      title: 'Tech Conference',
      description: 'Modern technology conference with innovative setup',
      image_url: 'https://images.pexels.com/photos/2833037/pexels-photo-2833037.jpeg',
      category: 'corporate',
      tags: ['technology', 'conference', 'modern'],
      is_featured: true,
      project_image_1: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg',
      project_image_2: 'https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg',
      project_image_3: 'https://images.pexels.com/photos/1708936/pexels-photo-1708936.jpeg'
    }
  ];

  // Use sample images if no data from Supabase
  const imagesToDisplay = galleryImages.length > 0 ? galleryImages : sampleImages;

  useEffect(() => {
    updatePageSEO({
      title: 'Gallery - PrimXP | Event Portfolio & Past Projects',
      description: 'Explore our portfolio of successful events including corporate conferences, product launches, team meetings, and retail branding projects. See our work in action.',
      keywords: 'event portfolio, gallery, corporate events, product launches, event photography, project showcase',
      url: 'https://www.primxp.com/gallery'
    });
  }, []);

  useEffect(() => {
    let filtered = imagesToDisplay;

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(img => img.category === selectedCategory);
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(img =>
        img.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        img.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        img.tags?.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    setFilteredImages(filtered);
  }, [imagesToDisplay, selectedCategory, searchTerm]);

  // Get unique categories
  const categories = ['all', ...Array.from(new Set(imagesToDisplay.map(img => img.category).filter(Boolean)))];

  // Helper function to get all images for a project
  const getProjectImages = (image: GalleryImage): string[] => {
    const images = [image.image_url];
    
    // Add project images if they exist
    for (let i = 1; i <= 10; i++) {
      const projectImage = image[`project_image_${i}` as keyof GalleryImage] as string;
      if (projectImage) {
        images.push(projectImage);
      }
    }
    
    return images;
  };

  const openModal = (image: GalleryImage, index: number) => {
    const projectImages = getProjectImages(image);
    setSelectedImage(image);
    setCurrentProjectImages(projectImages);
    setCurrentImageIndex(0); // Start with first image of the project
  };

  const closeModal = () => {
    setSelectedImage(null);
    setCurrentImageIndex(0);
    setCurrentProjectImages([]);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (!selectedImage || currentProjectImages.length === 0) return;
    
    let newIndex = currentImageIndex;
    if (direction === 'prev') {
      newIndex = currentImageIndex > 0 ? currentImageIndex - 1 : currentProjectImages.length - 1;
    } else {
      newIndex = currentImageIndex < currentProjectImages.length - 1 ? currentImageIndex + 1 : 0;
    }
    
    setCurrentImageIndex(newIndex);
  };

  return (
    <main className="pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#2d545e] to-[#12343b] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Event Gallery
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Explore our portfolio of successful events and see how we bring visions to life
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#e1b382] focus:border-transparent outline-none"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center space-x-2">
              <Filter className="text-gray-400 w-5 h-5" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#e1b382] focus:border-transparent outline-none"
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category === 'all' ? 'All Categories' : category.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Results count */}
          <div className="mt-4 text-gray-600">
            Showing {filteredImages.length} of {imagesToDisplay.length} projects
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="animate-pulse">
                  <div className="w-full h-64 bg-gray-200 rounded-xl mb-4" />
                  <div className="space-y-2">
                    <div className="w-3/4 h-5 bg-gray-200 rounded" />
                    <div className="w-full h-4 bg-gray-200 rounded" />
                  </div>
                </div>
              ))}
            </div>
          ) : filteredImages.length === 0 ? (
            <div className="text-center py-20">
              <div className="text-gray-400 mb-4">
                <Search className="w-16 h-16 mx-auto" />
              </div>
              <h3 className="text-2xl font-bold text-gray-600 mb-2">No projects found</h3>
              <p className="text-gray-500">Try adjusting your search or filter criteria</p>
            </div>
          ) : (
            <motion.div
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              <AnimatePresence>
                {filteredImages.map((image, index) => (
                  <motion.div
                    key={image.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className="group cursor-pointer"
                    onClick={() => openModal(image, index)}
                  >
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
                      <div className="relative overflow-hidden">
                        <img
                          src={image.image_url}
                          alt={image.title}
                          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="absolute top-4 right-4">
                          {image.is_featured && (
                            <span className="bg-[#e1b382] text-white px-3 py-1 rounded-full text-sm font-medium">
                              Featured
                            </span>
                          )}
                        </div>
                        <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          {image.category && (
                            <span className="inline-block bg-[#e1b382] px-3 py-1 rounded-full text-sm font-medium capitalize">
                              {image.category.replace('-', ' ')}
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="p-6">
                        <h3 className="text-xl font-bold mb-2 text-[#2d545e] group-hover:text-[#e1b382] transition-colors">
                          {image.title}
                        </h3>
                        {image.description && (
                          <p className="text-gray-600 mb-4 line-clamp-2">
                            {image.description}
                          </p>
                        )}
                        {image.tags && image.tags.length > 0 && (
                          <div className="flex flex-wrap gap-2">
                            {image.tags.slice(0, 3).map((tag, idx) => (
                              <span
                                key={idx}
                                className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs capitalize"
                              >
                                {tag.replace('-', ' ')}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          )}
        </div>
      </section>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
              onClick={closeModal}
            >
              {/* Modal Content */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="relative max-w-4xl w-full"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 z-10 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                >
                  <X size={24} />
                </button>

                {/* Navigation Buttons */}
                {currentProjectImages.length > 1 && (
                  <>
                    <button
                      onClick={() => navigateImage('prev')}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                    >
                      <ChevronLeft size={24} />
                    </button>
                    <button
                      onClick={() => navigateImage('next')}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                    >
                      <ChevronRight size={24} />
                    </button>
                  </>
                )}

                {/* Image */}
                <img
                  src={currentProjectImages[currentImageIndex]}
                  alt={selectedImage.title}
                  className="w-full h-auto max-h-screen object-contain rounded-lg"
                />

                {/* Image Info */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent text-white p-6 rounded-b-lg">
                  <h3 className="text-2xl font-bold mb-2">{selectedImage.title}</h3>
                  {selectedImage.description && (
                    <p className="text-white/90 mb-4">{selectedImage.description}</p>
                  )}
                  <div className="flex items-center justify-between">
                    {selectedImage.category && (
                      <span className="bg-[#e1b382] px-3 py-1 rounded-full text-sm font-medium capitalize">
                        {selectedImage.category.replace('-', ' ')}
                      </span>
                    )}
                    {currentProjectImages.length > 1 && (
                      <span className="text-white/70 text-sm">
                        {currentImageIndex + 1} of {currentProjectImages.length}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </main>
  );
};

export default GalleryPage;
