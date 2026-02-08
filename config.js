// ============================================
// 💝 CUSTOMIZE YOUR VALENTINE'S WEBSITE HERE 💝
// ============================================

const CONFIG = {
    // Your Valentine's name that will appear in the title
    // Example: "Jade", "Sarah", "Mike"
    valentineName: "Викулик",

    // The title that appears in the browser tab
    // You can use emojis! 💝 💖 💗 💓 💞 💕 👉 👈 😢
    pageTitle: "Будешь моей валентинкой? 💝",

    // Floating emojis that appear in the background
    // Find more emojis at: https://emojipedia.org
    floatingEmojis: {
        hearts: ['❤️', '💖', '💝', '💗', '💓'],  // Heart emojis
        bears: ['🧸', '🐻']                       // Cute bear emojis
    },

    // Questions and answers
    // Customize each question and its possible responses
    questions: {
        first: {
            text: "Я тебе нравлюсь?",                                    // First interaction
            yesBtn: "Да",                                             // Text for "Yes" button
            noBtn: "Нет",                                               // Text for "No" button
            secretAnswer: "Ты не просто нравишься мне, я люблю тебя ❤️"           // Secret hover message
        },
        second: {
            text: "Как сильно ты меня любишь",                          // For the love meter
            startText: "Настолько? 👉👈",                                   // Text before the percentage
            nextBtn: "❤️"                                         // Text for the next button
        },
        third: {
            text: "Будешь моей валентинкой 14 Февраля? 🌹", // The big question!
            yesBtn: "Да!",                                             // Text for "Yes" button
            noBtn: "Нет"                                                 // Text for "No" button
        }
    },

    // Love meter messages
    // They show up depending on how far they slide the meter
    loveMessages: {
        extreme: "Я тоже очень сильно люблю тебя, малыш 💜🤍",  // Shows when they go past 5000%
        high: "Бесконечность не предел! 🫶💝",              // Shows when they go past 1000%
        normal: "А чё так мало 😢"                           // Shows when they go past 100%
    },

    // Messages that appear after they say "Yes!"
    celebration: {
        title: "Вместе с тобой я самый счастливый парень, Викуль 🎉💝💖💝💓",
        message: "Я бесконечно сильно люблю тебя, малыш, и очень сильно хочу тебя обнять 🫶",
        emojis: "🎁💖🤗💝💋❤️💕"  // These will bounce around
    },

    // Color scheme for the website
    // Use https://colorhunt.co or https://coolors.co to find beautiful color combinations
    colors: {
        backgroundStart: "#ffafbd",      // Gradient start (try pastel colors for a soft look)
        backgroundEnd: "#ffc3a0",        // Gradient end (should complement backgroundStart)
        buttonBackground: "#ff6b6b",     // Button color (should stand out against the background)
        buttonHover: "#ff8787",          // Button hover color (slightly lighter than buttonBackground)
        textColor: "#ff4757"             // Text color (make sure it's readable!)
    },

    // Animation settings
    // Adjust these if you want faster/slower animations
    animations: {
        floatDuration: "15s",           // How long it takes hearts to float up (10-20s recommended)
        floatDistance: "50px",          // How far hearts move sideways (30-70px recommended)
        bounceSpeed: "0.5s",            // Speed of bouncing animations (0.3-0.7s recommended)
        heartExplosionSize: 1.5         // Size of heart explosion effect (1.2-2.0 recommended)
    },

    // Background Music (Optional)
    // Add your own music URL after getting proper licenses
    music: {
        enabled: true,                     // Music feature is enabled
        autoplay: true,                    // Try to autoplay (note: some browsers may block this)
        musicUrl: "https://fine.sunproxy.net/file/WnRsWFhENi9tUzdyU0hBRVlmSEExa20yQ0M5TFJXUTVKelRGOVBpOURIVk5GcVB0KzRyUmJ1SmVuL0N0UGd1ZVNtQW9oc0NDQ01NNVU0OEhGS0JKV0txb0xRUzcyVUpOdDR6YkhQYk45SmM9/katya_miltej_-_Vstretimsya_zavtra_(SkySound.cc).mp3", // Music streaming URL
        startText: "🎵 Музычку?",        // Button text to start music
        stopText: "🔇 Выключить",         // Button text to stop music
        volume: 0.1                        // Volume level (0.0 to 1.0)
    }
};

// Don't modify anything below this line unless you know what you're doing
window.VALENTINE_CONFIG = CONFIG; 