import { GetStaticPropsContext } from 'next';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { Welcome } from '../components/Welcome/Welcome';
import NextImage from 'next/image';
import landingImage from '@/public/images/upscalemedia-transformed.png';
import logo2 from '@/public/images/logo2.png';
import mutual from '@/public/images/mutual.png';
import { useEffect, useRef } from 'react';
import Autoplay from 'embla-carousel-autoplay';

export default function HomePage() {
  const {t} = useTranslation('common');
  const [innerHeight, setInnerHeight] = useState(0);
  const [hasMounted, setHasMounted] = useState(false);
  const autoplay = useRef(Autoplay({ delay: 3000 }));
  const autoplay2 = useRef(Autoplay({ delay: 1500 }));
  const partners = [logo2, mutual, logo2, mutual, logo2, mutual, logo2, mutual, logo2, mutual]
  const testimonies = [
    {
        role: "CEO AFRIKA GARAGE",
        image: landingImage,
        description: "Lorem ipsum dolor sit amet consectetur.Neque proin placerat sit feugiat eget risus pharetra sit a.Lorem ipsum dolor sit amet consectetur.Neque proin placerat sit feugiat eget risus pharetra sit a."
    },
    {
        role: "CEO AFRIKA GARAGE",
        image: landingImage,
        description: "Lorem ipsum dolor sit amet consectetur.Neque proin placerat sit feugiat eget risus pharetra sit a.Lorem ipsum dolor sit amet consectetur.Neque proin placerat sit feugiat eget risus pharetra sit a."
    },
    {
        role: "CEO AFRIKA GARAGE",
        image: landingImage,
        description: "Lorem ipsum dolor sit amet consectetur.Neque proin placerat sit feugiat eget risus pharetra sit a.Lorem ipsum dolor sit amet consectetur.Neque proin placerat sit feugiat eget risus pharetra sit a."
    },
]
  useEffect(() => {
    const fullHeight = window.innerHeight;
    const calculatedHeight = fullHeight - fullHeight * 0.18;
    setInnerHeight(calculatedHeight);
    setHasMounted(true);
  }, []);
  // const height = innerHeight - (window.innerHeight * 0.18);
  if (!hasMounted) return null;
  return (
    <Box pt="18vh">
      <Box w="100%" pos="relative">
        <Box
          w="60%"
          h={innerHeight}
          pos="relative"
          style={{
            zIndex: 3,
            backgroundImage: "url('/images/Vector.svg')",
            backgroundSize: 'cover', 
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <Box style={{display: "flex", justifyContent: "start", alignItems: "center"}} w="100%" mih={innerHeight}>
            <Container size="70%">
              <Stack py={30} pos="relative" gap={40}>
                <Title ta="center" c="white" order={1}>Assistance routière
                rapide et fiable.</Title>
                <Text ta="center" c="white">Découvrez MsaAda AfriKa, la plateforme numérique qui vous offre une assistance routière rapide et fiable partout en Afrique.</Text>
                <Group align="center" justify="center">
                  <Button component={Link} c="#BA0218" href="/" bg="white">
                  Devenir Prestataire
                  </Button>
                  <Button component={Link} variant="outline" color="white" href="/">
                  Prendre une Rendez vous
                  </Button>
                </Group>
              </Stack>
            </Container>
          </Box>
        </Box>
        <Box
          pos="absolute"
          right={0}
          top={0}
          w="53%"
          h={innerHeight}
        >
          <Image
            priority
            style={{objectFit: "cover"}}
            loading="eager"
            component={NextImage}
            src={landingImage}
            alt="Logo"
            w="100%"
            h="100%"
          />
        </Box>
      </Box>
      <Box pt={100}>
        <Container size="70%">
        <Title mb="25" ta="center" c="#BA0218" order={4}>Qu'est-ce que MSA Afrika ?</Title>
          <Text ta="center">MsaAda AfriKa est une plateforme en ligne qui offre une assistance routière rapide et fiable aux conducteurs en difficulté en Afrique. Nous utilisons la technologie pour connecter les conducteurs avec des professionnels de l'assistance en temps réel. Notre objectif est de rendre les routes plus sûres et de garantir la tranquillité d'esprit des conducteurs.</Text>
        </Container>
      </Box>
      <Box pt={100}>
        <Container size="80%">
        <Title mb="25" ta="center" c="#BA0218" order={4}>Localisation des couverage</Title>
        </Container>
        <iframe
          src="https://www.google.com/maps?q=5.961372340323668,10.151819909307317&output=embed"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        >
        </iframe>
      </Box>
      <Provider/>
      <Box py={50} >
        <Container size="90%">
          <Box>
            <Carousel
              w="100%"
              slidesToScroll={1}
              slideSize="100%"
              slideGap="md"
              align="start"
              loop
              withControls
              px={70}
              previousControlIcon={<IconChevronLeft size={32} />}
              nextControlIcon={<IconChevronRight size={32} />}
              styles={{
                control: {
                  background: 'transparent',
                  boxShadow: 'none',
                  border: 'none',
                  width: 'auto',
                  height: 'auto',
                  padding: 0,
                },
              }}
              plugins={[autoplay.current]}
              onMouseEnter={autoplay.current.stop}
              onMouseLeave={autoplay.current.reset}
          >
              {testimonies.map((item, index) => (
              <CarouselSlide key={index}>
                <Paper radius={20} style={{background: 'linear-gradient(45deg, #BA0218 50%, #54010B)'}}>
                  <Group mih="100%" gap={0} align="center" justify="center" w="100%">
                    <Box
                      h="100%"
                      w="40%"
                      pos="relative"
                    >
                      <Image
                        priority
                        style={{objectFit: "contain", borderTopRightRadius: '16px', borderTopLeftRadius: '16px',}}
                        loading="eager"
                        pos="relative"
                        component={NextImage}
                        src={item.image}
                        alt="Logo"
                        w="100%"
                        h="100%"
                      />
                      <Box
                        w="100%"
                        pos="absolute"
                        py={25}
                        pl={30}
                        bottom={0}
                        style={{backgroundColor: " #54010BE5", zIndex: 3}}
                      >
                        <Text fw={700} size="sm" c="white">{item.role}</Text>
                      </Box>
                    </Box>
                    <Box mih="100%" w="60%" py={15} px={70}>
                      <Text ta="center" size="sm" c="white">{item.description}</Text>
                    </Box>
                  </Group>
                </Paper>
              </CarouselSlide>
              ))}
            </Carousel>
          </Box>
          <Box pt={50}>
            <Title order={3} c=" #BA0218" ta="center" mb="20">Nos Partenaires</Title>
            <Carousel
              w="100%"
              slidesToScroll={1}
              slideSize="20%"
              slideGap={0}
              align="start"
              loop
              withControls
              px={70}
              previousControlIcon={<IconChevronLeft size={20} />}
              nextControlIcon={<IconChevronRight size={20} />}
              styles={{
                control: {
                  background: 'transparent',
                  boxShadow: 'none',
                  border: 'none',
                  width: 'auto',
                  height: 'auto',
                  padding: 0,
                },
              }}
              plugins={[autoplay2.current]}
              onMouseEnter={autoplay2.current.stop}
              onMouseLeave={autoplay2.current.reset}
          >
              {partners.map((item, index) => (
              <CarouselSlide key={index}>
                  <Box
                    pos="relative"
                    px={20}
                    // style={{
                    //   borderRight: '2px solid #1a1a1a', // bordure sombre à droite
                    // }}
                  >
                    <Image
                      priority
                      style={{objectFit: "contain"}}
                      loading="eager"
                      pos="relative"
                      component={NextImage}
                      src={item}
                      alt="Logo"
                      w="100%"
                      h="100%"
                    />
                    <Divider color="#4C535D" style={{zIndex: 3}} pos="absolute" top={20} right={0} size={0.15} h={70} orientation="vertical" />
                  </Box>
                {/* <Group gap={0} align="center" justify="space-between" w="100%">
                </Group> */}
              </CarouselSlide>
              ))}
            </Carousel>
          </Box>
        </Container>
      </Box>
      <Box py={50} style={{background: 'linear-gradient(to bottom, #BA0218 50%, #54010B)'}}>
        <Container size="90%">
          <Group align="center" justify="space-between">
            <Box>
              <Title mb="md" order={4} c="white" ta="start">Pourquoi Devenir Prestataire Chez Nous?</Title>
              <Stack pl={10} align='start' justify='center'>
                <Text c="white" ta="center">• Lorem ipsum dolor sit amet consectetur.</Text>
                <Text c="white" ta="center">• Neque proin placerat sit </Text>
                <Text c="white" ta="center">• feugiat eget risus pharetra sit a.</Text>
                <Text c="white" ta="center">• Neque proin placerat sit </Text>
                <Text c="white" ta="center">• Neque proin placerat sit </Text>
              </Stack>
            </Box>
            <Stack w="40%" align="center" justify="center">
              <TextInput
                placeholder="Nom"
                radius={40}
                w="100%"
              />
              <TextInput
                placeholder="Email"
                radius={40}
                w="100%"
              />
              <Button radius={40} fullWidth component={Link} href="/" bg="#718096" c="white">
                Soumettre
              </Button>
            </Stack>
          </Group>
        </Container>
      </Box>
    </Box>
  );
}
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { Box, Button, Center, Container, Divider, Group, Image, Paper, Stack, Text, TextInput, Title } from '@mantine/core';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import { use, useState } from 'react';
import Provider from '@/components/Provider/Provider';
import { Carousel, CarouselSlide } from '@mantine/carousel';
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';

export async function getStaticProps({ locale = 'en' }: GetStaticPropsContext) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'common',
        'footer',
        'header',
      ])),
      // Will be passed to the page component as props
    },
  }
}