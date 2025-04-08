'use client'
import { useTranslation } from 'react-i18next';

export default function HowStudy() {
    const { t } = useTranslation();

    return (
        <div className="container mx-auto py-12 px-4 bg-white rounded-lg shadow-lg font-montserrat">
            <div className="max-w-4xl mx-auto">
                <h2 className="md:text-3xl text-2xl font-bold text-center mb-8 text-[#339933]">{t('howstudy')}</h2>
                <p className="text-lg text-[#969696] mb-10 text-center">{t('howstudyDesc')}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-green-50 p-6 rounded-lg shadow-md border-l-4 text-[#339933] hover:shadow-xl transition-all duration-300">
                        <h3 className="text-xl font-semibold mb-4 text-[#339933]">{t('geothermalEnergy')}</h3>
                        <p className="text-[#969696] mb-2">{t('geothermalEnergyDesc1')}</p>
                        <p className="text-[#969696]">{t('geothermalEnergyDesc2')}</p>
                    </div>
                    
                    <div className="bg-green-50 p-6 rounded-lg shadow-md border-l-4 text-[#339933] hover:shadow-xl transition-all duration-300">
                        <h3 className="text-xl font-semibold mb-4 text-[#339933]">{t('sustainableFarming')}</h3>
                        <p className="text-[#969696] mb-2">{t('sustainableFarmingDesc1')}</p>
                        <p className="text-[#969696]">{t('sustainableFarmingDesc2')}</p>
                    </div>
                    
                    <div className="bg-green-50 p-6 rounded-lg shadow-md border-l-4 text-[#339933] hover:shadow-xl transition-all duration-300">
                        <h3 className="text-xl font-semibold mb-4 text-[#339933]">{t('highValueProduction')}</h3>
                        <p className="text-[#969696] mb-2">{t('highValueProductionDesc1')}</p>
                        <p className="text-[#969696]">{t('highValueProductionDesc2')}</p>
                    </div>
                    
                    <div className="bg-green-50 p-6 rounded-lg shadow-md border-l-4 text-[#339933] hover:shadow-xl transition-all duration-300">
                        <h3 className="text-xl font-semibold mb-4 text-[#339933]">{t('localProduction')}</h3>
                        <p className="text-[#969696] mb-2">{t('localProductionDesc1')}</p>
                        <p className="text-[#969696]">{t('localProductionDesc2')}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}