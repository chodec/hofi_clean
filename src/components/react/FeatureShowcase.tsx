import { motion } from 'motion/react';
import { BrushCleaning, SoapDispenserDroplet, DoorOpen, House, Shield, Headphones } from 'lucide-react';

import warehouseImg from '@assets/jednorazovyuklid.jpg';
import truckImg from '@assets/generalni.jpg';
import packageImg from '@assets/rekonstrukce.jpg';
import shieldImg from '@assets/okna.jpg';

const features = [
  {
    icon: BrushCleaning,
    title: 'Úklid domů a bytů',
    description: 'Váš domov je vaším útočištěm. Dopřejte si dokonalý pocit čistoty a pohodlí díky našemu jednorázovému nebo generálnímu úklidu.',
    image: warehouseImg,
  },
  {
    icon: SoapDispenserDroplet,
    title: 'Čisté kanceláře a firemní zázemí',
    description: 'Zajistíme reprezentativní prostory pro vaše zaměstnance i klienty. Věříme, že v uspořádaném a čistém prostředí se rodí ty nejlepší úspěchy.',
    image: truckImg,
  },
  {
    icon: DoorOpen,
    title: 'Profesionální úklid po stavebních pracích',
    description: 'Stavba či rekonstrukce jsou vyčerpávající. Zatímco vy budete odpočívat, my se postaráme o to, aby vaše nové prostory zářily čistotou.',
    image: packageImg,
  },
  {
    icon: House,
    title: 'Údržba průmyslových hal a objektů',
    description: 'Expert úklid disponuje profesionálním týmem i špičkovou technikou. Díky spojení zkušeností, výkonných strojů a účinné chemie zajistíme perfektní čistotu i v náročném provozu.',
    image: shieldImg,
  }
];

export default function FeatureShowcase() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
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

