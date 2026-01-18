import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, Calendar, User, ArrowRight, Building2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useSupabaseData } from '../hooks/useSupabaseData';
import { RecentWork } from '../lib/supabase';
import { updatePageSEO } from '../utils/seo';

const ProjectsPage: React.FC = () => {
  const navigate = useNavigate();
  const { data: projects, loading } = useSupabaseData<RecentWork>('recent_work', {
    orderBy: 'created_at',
    ascending: false
  });

  const [filteredProjects, setFilteredProjects] = useState<RecentWork[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');

  useEffect(() => {
    updatePageSEO({
      title: 'All Projects - PrimXP | Complete Event Portfolio',
      description: 'Browse our complete portfolio of successful events including corporate conferences, product launches, team meetings, and retail branding projects.',
      keywords: 'event portfolio, all projects, corporate events, product launches, event gallery, project showcase',
      url: 'https://www.primxp.com/projects'
    });
  }, []);

  useEffect(() => {
    let filtered = projects;

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(project => project.category === selectedCategory);
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(project =>
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.client_name?.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredProjects(filtered);
  }, [projects, selectedCategory, searchTerm]);

  // Get unique categories
  const categories = ['all', ...Array.from(new Set(projects.map(project => project.category).filter(Boolean)))];

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
            <div className="bg-[#e1b382]/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8">
              <Building2 className="w-10 h-10 text-[#e1b382]" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              All Projects
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Explore our complete portfolio of successful events and see how we bring visions to life
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
            Showing {filteredProjects.length} of {projects.length} projects
          </div>
        </div>
      </section>

      {/* Projects Grid */}
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
                    <div className="w-1/2 h-4 bg-gray-200 rounded" />
                  </div>
                </div>
              ))}
            </div>
          ) : filteredProjects.length === 0 ? (
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
                {filteredProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group cursor-pointer"
                    onClick={() => navigate(`/project/${project.id}`)}
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={project.image_url}
                        alt={project.title}
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {project.category && (
                          <span className="inline-block bg-[#e1b382] px-3 py-1 rounded-full text-sm font-medium capitalize">
                            {project.category.replace('-', ' ')}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-3 text-[#2d545e] group-hover:text-[#e1b382] transition-colors">
                        {project.title}
                      </h3>
                      {project.description && (
                        <p className="text-gray-600 mb-4 line-clamp-2">
                          {project.description}
                        </p>
                      )}

                      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                        {project.client_name && (
                          <div className="flex items-center space-x-1">
                            <User size={14} />
                            <span>{project.client_name}</span>
                          </div>
                        )}
                        {project.project_date && (
                          <div className="flex items-center space-x-1">
                            <Calendar size={14} />
                            <span>{new Date(project.project_date).getFullYear()}</span>
                          </div>
                        )}
                      </div>

                      <div className="flex items-center space-x-2 text-[#e1b382] hover:text-[#c89666] font-medium group-hover:translate-x-1 transition-transform">
                        <span>View Details</span>
                        <ArrowRight size={16} />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#e1b382] to-[#c89666] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Let's create something extraordinary together
            </p>
            <button
              onClick={() => navigate('/contact')}
              className="bg-white text-[#e1b382] px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition-colors inline-flex items-center space-x-2"
            >
              <span>Get Started Today</span>
              <ArrowRight size={20} />
            </button>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default ProjectsPage;