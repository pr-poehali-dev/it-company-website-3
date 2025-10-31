import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const services = [
    {
      icon: "Code2",
      title: "Разработка ПО",
      description: "Создаём надёжные программные решения с использованием современных технологий и лучших практик"
    },
    {
      icon: "Cloud",
      title: "Облачные решения",
      description: "Проектируем и внедряем масштабируемую облачную инфраструктуру для вашего бизнеса"
    },
    {
      icon: "Shield",
      title: "Кибербезопасность",
      description: "Защищаем ваши данные и системы от современных киберугроз комплексными решениями"
    },
    {
      icon: "Smartphone",
      title: "Мобильные приложения",
      description: "Разрабатываем интуитивные мобильные приложения для iOS и Android платформ"
    },
    {
      icon: "Database",
      title: "Анализ данных",
      description: "Помогаем принимать обоснованные решения на основе глубокого анализа ваших данных"
    },
    {
      icon: "Headphones",
      title: "Техподдержка",
      description: "Обеспечиваем круглосуточную техническую поддержку и сопровождение ваших проектов"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-secondary">TechVision</div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#home" className="text-foreground hover:text-primary transition-colors">Главная</a>
              <a href="#services" className="text-foreground hover:text-primary transition-colors">Услуги</a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors">Контакты</a>
            </div>
            <Button className="hidden md:flex">Связаться</Button>
            <button className="md:hidden">
              <Icon name="Menu" size={24} />
            </button>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-secondary mb-6 animate-fade-in leading-tight">
              Технологии будущего
              <br />
              <span className="text-primary">уже сегодня</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 animate-fade-in max-w-2xl mx-auto" style={{ animationDelay: '0.2s' }}>
              Создаём инновационные IT-решения, которые трансформируют ваш бизнес и открывают новые возможности
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <Button size="lg" className="text-lg px-8">
                Начать проект
                <Icon name="ArrowRight" size={20} className="ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8">
                Узнать больше
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
              Наши услуги
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Полный спектр IT-услуг для развития вашего бизнеса
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-scale-in border-0 bg-white"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <Icon name={service.icon} size={28} className="text-primary group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-semibold text-secondary mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-secondary text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Готовы начать проект?
          </h2>
          <p className="text-xl mb-10 text-white/80">
            Свяжитесь с нами, и мы обсудим, как технологии могут помочь вашему бизнесу
          </p>
          <Button size="lg" variant="secondary" className="text-lg px-8">
            Связаться с нами
            <Icon name="Send" size={20} className="ml-2" />
          </Button>
        </div>
      </section>

      <footer className="py-12 px-6 bg-white border-t border-border">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-2xl font-bold text-secondary">TechVision</div>
            <div className="flex gap-8 text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">О нас</a>
              <a href="#" className="hover:text-primary transition-colors">Услуги</a>
              <a href="#" className="hover:text-primary transition-colors">Контакты</a>
            </div>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                <Icon name="Github" size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                <Icon name="Linkedin" size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                <Icon name="Mail" size={20} />
              </a>
            </div>
          </div>
          <div className="mt-8 text-center text-muted-foreground text-sm">
            © 2024 TechVision. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
