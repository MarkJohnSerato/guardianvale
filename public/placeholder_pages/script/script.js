        const modals = document.getElementById('imagemodals');
        const popupImg = document.getElementById('popupImg');
        const popupCaption = document.getElementById ('popupCaption');
        const popupDescription = document.getElementById('popupDescription');

        function openmodals(cardsElement) {
            const imgUrl = cardsElement.querySelector('img').src;
            const titleText = cardsElement.querySelector('.cards-title').textContent;

            popupImg.src = imgUrl;
            popupCaption.textContent = titleText;
//Inside the description dynamically based on the clicked card title condition
    if (titleText.trim() === "Apartment Buildings") {
        popupDescription.innerHTML = `
            <h4>Comprehensive Security for Residential Complexes</h4>
            <p>Guardian Vale provides tailored security solutions for apartment buildings, ensuring the safety of residents, visitors, and property. 
            Our services include access control, CCTV monitoring, and emergency response planning.
            We work closely with building management to create a secure and comfortable living environment, giving residents peace of mind every day.</p>
        `;
    } else if (titleText.trim() === "Luxury Homes") {
        popupDescription.innerHTML = `
            <h4>Your Home, Protected On Your Terms</h4>
            <p>Imagine having a security team that watches your home exactly when you need them to, without privacy concerns when you don’t. Guardian Vale becomes your invisible household staff—verifying that the Amazon delivery actually made it inside your gate, ensuring the contractor arrived (and left) on schedule,
             and standing guard when you’re asleep or away. Whether you need continuous protection or monitoring only during vacations, business trips, or nighttime hours, our security professionals adapt to your requirements. When something truly requires attention, we notify authorities within minutes. Many clients even receive homeowners’ insurance discounts that help offset service costs, making professional security both practical and affordable.</p>
        `;
    } else if (titleText.trim() === "Car Dealerships") {
        popupDescription.innerHTML = `
            <h4>Your Dealership, Protected On Your Terms</h4>
            <p>
            Guardian Vale acts as your invisible on-site staff—verifying vehicle deliveries, ensuring employees and contractors arrive (and leave) on schedule, and keeping watch when your lot is most vulnerable at night or on weekends. 
            Whether you need continuous monitoring or only after-hours protection, our security professionals adapt to your dealership’s requirements.
            <br><br>
            When suspicious activity occurs, we notify authorities within minutes—helping prevent theft, vandalism, or unauthorized access. Many dealerships also benefit from lower insurance premiums, making professional security not only smart but also cost-effective.
            </p>
        `;
    } else if (titleText.trim() === "Parking Lots") {
        popupDescription.innerHTML = `
            <h4>Ensuring Safety and Security in Every Space</h4>
            <p>
            Guardian Vale provides professional security services for parking lots, keeping vehicles and visitors safe at all times. Our solutions include CCTV monitoring, lighting assessments, and emergency response systems, designed to prevent theft, vandalism, and accidents. 
            We create a secure environment that allows users to park and access your facilities with confidence.
            </p>
        `;
    } else if (titleText.trim() === "Construction Sites") {
        popupDescription.innerHTML = `
            <h4>Protecting Your Property During Construction</h4>
            <p>
            Construction sites are major investments—but also prime targets. Expensive materials, heavy equipment, and partially built structures often attract thieves, vandals, or unauthorized visitors, especially after hours when crews are gone.
            <br><br>
            With Guardian Vale, your site is monitored around the clock. Our team verifies contractor arrivals, tracks material deliveries, documents project progress, and keeps watch for any suspicious activity. If a real threat arises, authorities are notified within minutes.
            <br><br>
            More than security, we provide oversight that helps ensure schedules are followed and quality standards are met. Instead of worrying about delays, damage, or theft, you’ll have peace of mind knowing your construction project is protected—so you can stay focused on building success.
            </p>
        `;
        
    } else if (titleText.trim() === "Gated Communities") {
        popupDescription.innerHTML = `
            <h4>Comprehensive Protection for Residential Communities</h4>
            <p>Residents choose gated communities for privacy, exclusivity, and peace of mind—and Guardian Vale ensures all three. 
            Our specialized monitoring covers entry gates, clubhouses, shared amenities, and perimeter boundaries, balancing effective protection with respect for resident privacy.
            <br>
            <br>
            Our trained professionals verify visitor access, oversee amenity use, and detect suspicious activity in real time. Unlike traditional guard services, our remote monitoring provides constant coverage without disrupting the community’s character. With immediate authority notification when needed, residents enjoy the security they expect while preserving the prestigious atmosphere they value.
            </p>
        `;
    } else if (titleText.trim() === "Office Buildings") {
        popupDescription.innerHTML = `
            <h4>Tailored Security Solutions for Workspaces</h4>
            <p>
            Guardian Vale provides professional security services for offices and office buildings, ensuring a safe and secure environment for employees, clients, and visitors. From access control and CCTV monitoring to our solutions are designed to prevent unauthorized access, protect assets, and maintain a productive workplace. We customize our approach to meet the specific needs of each business, giving you peace of mind so your team can focus on success.
            </p>
        `;
    } else if (titleText.trim() === "Warehouses") {
        popupDescription.innerHTML = `
            <h4>Robust Security Solutions for Storage Facilities</h4>
            <p>
            Guardian Vale specializes in protecting warehouses and storage facilities with comprehensive security measures. Our services include 24/7 surveillance, access control, alarm systems, and safeguard valuable inventory and equipment. We tailor our approach to each warehouse’s layout and operational needs, minimizing risk and ensuring smooth, uninterrupted operations.
            </p>
        `;
    } else if (titleText.trim() === "Retail Stores") {
        popupDescription.innerHTML = `
            <h4>Comprehensive Protection for Retail Operations</h4>
            <p>
            Retail businesses face risks around the clock—from shoplifting during open hours to break-ins and theft after closing. Guardian Vale delivers continuous oversight that safeguards both your merchandise and your operations. Our professionals actively monitor public areas to deter theft and enhance customer safety, while providing full protection during the vulnerable overnight hours.
            <br><br>
            Beyond theft prevention, we help verify employee adherence to company policies and procedures, adding an extra layer of accountability. Unlike traditional alarms that react only after an incident, our team identifies suspicious behavior in real time and alerts authorities immediately when needed. Think of us as your tireless loss-prevention staff—always on duty, never on break—helping create a safer environment for your inventory, your employees, and your bottom line.
            </p>
        `;
    } else if (titleText.trim() === "Government Buildings") {
        popupDescription.innerHTML = `
            <h4>Securing Government Facilities</h4>
            <p>
            Guardian Vale provides reliable monitoring and protection for government buildings, ensuring sensitive areas remain secure during and after hours. Our trained professionals verify authorized access, deter unauthorized entry, and deliver rapid response to potential threats—helping maintain safety, accountability, and uninterrupted operations.
            </p>
        `;
    } else if (titleText.trim() === "Houses of Worship & Community Centers") {
        popupDescription.innerHTML = `
            <h4>Protection for Houses of Worship & Community Centers</h4>
            <p>
            Houses of worship and community centers are meant to be places of peace, safety, and connection. Guardian Vale provides discreet, reliable monitoring that safeguards congregants and visitors while respecting the welcoming nature of these spaces. Our professionals oversee entrances, parking areas, and gathering spaces in real time—deterring threats, preventing vandalism, and ensuring immediate response when needed.
            </p>
        `;
    } else if (titleText.trim() === "Summer Camps") {
        popupDescription.innerHTML = `
            <h4>Security for Summer Camps</h4>
            <p>
            Summer camps should be about adventure, learning, and fun—not safety worries. With Guardian Vale, campgrounds, cabins, entrances, and activity areas are monitored in real time to ensure a secure environment for campers and staff. Our professionals verify access, deter trespassing, and provide immediate response to suspicious activity, giving parents and organizers peace of mind while kids focus on creating lifelong memories.
            </p>
        `;
    } else if (titleText.trim() === "Schools") {
        popupDescription.innerHTML = `
            <h4>Comprehensive Security Solutions for Educational Institutions</h4>
            <p>
            At Guardian Vale, we understand the unique safety challenges faced by schools. Our tailored security services are designed to protect students, staff, and school property through proactive measures such as 24/7 surveillance and emergency response planning. We work closely with educational institutions to create a secure learning environment, allowing educators to focus on what matters most—teaching and student development.
            </p>
        `;
    } else {
        popupDescription.innerHTML = "";
    }

            modals.style.display = 'flex';
            setTimeout(() => {
                modals.classList.add('show');
            }, 10);
        }

        function closemodals() {
            modals.classList.remove('show');
            setTimeout(() => {
                modals.style.display = 'none';
                popupImg.src = '';
                popupDescription.innerHTML = ""; 
            }, 300);
        }

        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && modals.classList.contains('show')) {
                closemodals();
            }
        });