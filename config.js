const config = {
    event: {
        defaultEventId: "Mariajose-misxv2026",
        eventIdParam: "eventId",
        legacyFallback: {
            read: false,
            write: false,
            subscribe: false
        }
    },

    admin: {
        adminKey: "twodesign123",
        keyParam: "key",
        legacyKeyParam: "admin"
    },

    guestSeedsByEvent: {
        "Mariajose-misxv2026": {
            "1": {
                nombre: "Valeria Demo",
                pases: 2
            },
            "2": {
                nombre: "Familia Prueba",
                pases: 4
            }
        }
    },

    seo: {
        titulo: "María José Mazate Sajché | Mis XV 2026",
        descripcion: "Mis Quince Años de María José Mazate Sajché - 18 de Julio 2026",
        autor: "Two Design"
    },

    pareja: {
        nombres: "María José & Mazate Sajché",
        fecha: "18-07-2026",
        fechaVisible: "18.07.2026"
    },

    musica: {
        titulo: "Nuestra Canción",
        archivo: "audio/nuestra-cancion.mp3"
    },

    evento: {
        ceremonia: {
            titulo: "Ceremonia",
            lugar: "Iglesia Nuestra Señora de los Ángeles",
            hora: "16:30 hrs",
            direccion: "35 Calle, Zona 12, Cdad. de Guatemala",
            ubicacionUrl: "https://waze.com/ul/h9fxdgwgt6"
        },
        recepcion: {
            titulo: "Recepción",
            lugar: "Guardia de Honor",
            hora: "19:00 hrs",
            direccion: "Avenida La Reforma 262, Cdad. de Guatemala",
            ubicacionUrl: "https://ul.waze.com/ul?place=ChIJdVsg-EmjiYURVE02bUiyBCg&ll=14.61305930%2C-90.50989490&navigate=yes&utm_campaign=share_drive&utm_source=waze_app&utm_medium=lm_share_location"
        }
    },

    textos: {
        mensajeInvitado: "Eres muy especial para nosotros",
        mensajePases: "Hemos reservado para ti {pases} lugares especiales"
    },

    footer: {
        hashtag: "#MisXVanaMaria",
        instagramUrl: "https://instagram.com/rocio.fernando.boda",
        facebookUrl: "https://facebook.com/rociofernandoboda",
        marcaTexto: "Diseno",
        marcaNombre: "Two Design",
        marcaUrl: "https://twodesign.com"
    }
};

window.config = config;
