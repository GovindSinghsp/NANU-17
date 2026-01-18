import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useSupabaseData } from '../../hooks/useSupabaseData';
import { RecentWork } from '../../lib/supabase';

const RecentWorkSection: React.FC = () => {
  const navigate = useNavigate();
  const { data: recentWork, loading } = useSupabaseData<RecentWork>('recent_work', {
    filter: { is_featured: true },
    orderBy: 'created_at',
    ascending: false,
    limit: 6
  });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  if (loading) {
    return (
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-white rounded-xl shadow-lg overflow-hidden animate-pulse">
                <div className="w-full h-64 bg-gray-200" />
                <div className="p-6 space-y-3">
                  <div className="w-3/4 h-6 bg-gray-200 rounded" />
                  <div className="w-full h-4 bg-gray-200 rounded" />
                  <div className="w-1/2 h-4 bg-gray-200 rounded" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#2d545e]">
            Recent Work
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our latest projects and see how we bring exceptional events to life
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {recentWork.map((work) => (
            <motion.div
              key={work.id}
              variants={itemVariants}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group cursor-pointer"
            >
              <div className="relative overflow-hidden">
                <img
                  src={work.image_url}
                  alt={work.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="inline-block bg-[#e1b382] px-3 py-1 rounded-full text-sm font-medium">
                    {work.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-[#2d545e] group-hover:text-[#e1b382] transition-colors">
                  {work.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {work.description}
                </p>

                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  {work.client_name && (
                    <div className="flex items-center space-x-1">
                      <User size={14} />
                      <span>{work.client_name}</span>
                    </div>
                  )}
                  {work.project_date && (
                    <div className="flex items-center space-x-1">
                      <Calendar size={14} />
                      <span>{new Date(work.project_date).getFullYear()}</span>
                    </div>
                  )}
                </div>

                <button 
                  onClick={() => navigate(`/project/${work.id}`)}
                  className="flex items-center space-x-2 text-[#e1b382] hover:text-[#c89666] font-medium group-hover:translate-x-1 transition-transform"
                >
                  <span>View Details</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button 
            onClick={() => navigate('/projects')}
            className="bg-[#2d545e] hover:bg-[#12343b] text-white px-8 py-4 rounded-lg font-medium transition-colors inline-flex items-center space-x-2"
          >
            <span>View All Projects</span>
            <ArrowRight size={20} />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default RecentWorkSection;