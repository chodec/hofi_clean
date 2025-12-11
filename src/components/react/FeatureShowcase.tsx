import { motion } from 'motion/react';
import { BrushCleaning, SoapDispenserDroplet, DoorOpen, House, Shield, Headphones } from 'lucide-react';

import warehouseImg from '@assets/jednorazovyuklid.jpg';
import truckImg from '@assets/generalni.jpg';
import packageImg from '@assets/rekonstrukce.jpg';
import barChart3Img from '@assets/rekonstrukce.jpg';
import shieldImg from '@assets/okna.jpg';

const features = [
  {
    icon: BrushCleaning,
    title: 'Jednorázový úklid',
    description: 'Ideální před oslavou, po rodinné sešlosti nebo když potřebujete rychle uklidit.',
    image: warehouseImg,
  },
  {
    icon: SoapDispenserDroplet,
    title: 'Generální úklid',
    description: 'Hloubkové čištění celého bytu nebo domu.',
    image: truckImg,
  },
  {
    icon: DoorOpen,
    title: 'Úklid po rekonstrukci nebo stěhování',
    description: 'Odstranění prachu a nečistot.',
    image: packageImg,
  },
  {
    icon: House,
    title: 'Úklid hal a kanceláří',
    description: 'Čisté pracovní prostředí pro vyšší produktivitu.',
    image: barChart3Img,
  },
  {
    icon: Shield,
    title: 'Mytí oken a výloh',
    description: 'Profesionální mytí skel bez šmouh..',
    image: shieldImg,
  }
];

export default function FeatureShowcase() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {features.map((feature, index) => (
        <motion.div
          key={feature.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="group cursor-pointer"
        >
          <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
            {/* Image */}
            <div className="relative h-64 overflow-hidden">
              <motion.img
                src={feature.image.src}
                alt={feature.title}
                className="w-full h-full object-cover"
                loading="lazy"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
              />
              <div className="absolute inset-0 bg-linear-to-t from-slate-900 via-slate-900/50 to-transparent opacity-60" />
              
              {/* Icon overlay */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
                className="absolute top-4 right-4 w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-lg"
              >
                <feature.icon className="w-6 h-6 text-blue-600" />
              </motion.div>
            </div>

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-200 opacity-90">{feature.description}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

