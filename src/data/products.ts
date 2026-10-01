import { Product } from '../types';

export const PRODUCTS: Product[] = [
  {
    id: 'hp-spectre-14',
    name: 'HP Spectre x360 14',
    brand: 'HP',
    category: 'ultrabook',
    categoryLabel: 'Doanh Nhân',
    screenSize: '14.0 INCH',
    subtitle: 'Doanh nhân & Sang trọng, Intel Core Ultra 7, màn hình 2.8K OLED xoay gập 360°.',
    description: 'Chế tác hoàn mỹ từ nhôm nguyên khối phay cắt vát góc đá quý Gem-Cut. Bản lề 360 độ siêu bền bỉ linh hoạt chuyển đổi giữa máy tính xách tay và bảng vẽ sáng tạo chuyên nghiệp.',
    basePrice: 28990000,
    highlightSpecs: {
      label1: 'Trọng lượng',
      val1: '990 g',
      label2: 'Thời lượng pin',
      val2: '20 giờ',
      label3: 'Cổng kết nối',
      val3: 'Cổng Thunderbolt 4 kép'
    },
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBxY2Lpi0tzdt2E8KJL0uI-DshjF6SdqSrWPHxPs_rZDeAPxxC1Mv24T6vHilGTjlVciZ0RMH_uJbX42zXXoYtJQPPybicj4fELH9TWptKbVVQWDvlwd5pcfG6neULQfatdKsYHdUUyeGtBAk1EFeRkPoQff64rH1mPuBY_LV5wfv3Kx1rQc-a4SLU9fk3AOIJ0gjC_DcMqdOOF-TB1Fj8Gk5UPlx2-VgBatUrFHEyEC-1QIlLPLhA',
    specs: {
      cpu: 'Intel Core Ultra 7 155H (16 Cores, 22 Threads, NPU AI)',
      gpu: 'Intel Arc Graphics (8 Xe-cores)',
      ram: '16GB LPDDR5X 7467 MHz onboard',
      storage: '1TB PCIe Gen 4 NVMe M.2 SSD',
      display: '14" 2.8K (2880 x 1800) OLED 120Hz Touch 0.2ms HDR 500 nits 100% DCI-P3',
      weight: '990 g (0.99 kg) siêu nhẹ',
      battery: '68Wh Li-ion Polymer, Sạc nhanh 65W GaN',
      ports: '2x Thunderbolt 4 Type-C (40Gbps), 1x USB-A 10Gbps, 1x Audio combo 3.5mm',
      chassis: 'Nhôm CNC hàng không nguyên khối, cắt vát góc tinh thể',
      security: 'Camera IR 9MP tự động căn khung AI, Cảm biến vân tay, Khóa webcam vật lý',
      warranty: '2 Năm Bảo hành tận nơi HP VIP Premier'
    },
    finishes: [
      { id: 'slate', name: 'Titanium Slate', colorHex: '#5A6270', material: 'Nhôm CNC phay xước titan' },
      { id: 'nightfall', name: 'Nightfall Black', colorHex: '#21242B', material: 'Đen mạ Anode cao cấp viền đồng' },
      { id: 'silver', name: 'Natural Silver', colorHex: '#D8DCE4', material: 'Bạc tự nhiên thổi cát mịn' }
    ],
    customizable: {
      cpus: [
        { name: 'Intel Core Ultra 7 155H (NPU 34 TOPS)', addPrice: 0 },
        { name: 'Intel Core Ultra 9 185H (NPU 40 TOPS)', addPrice: 4200000 }
      ],
      rams: [
        { name: '16GB LPDDR5X 7467 MHz', addPrice: 0 },
        { name: '32GB LPDDR5X 7467 MHz Dual-channel', addPrice: 3500000 }
      ],
      storages: [
        { name: '1TB PCIe 4.0 NVMe M.2 SSD', addPrice: 0 },
        { name: '2TB PCIe 4.0 High-Speed NVMe', addPrice: 2800000 }
      ],
      displays: [
        { name: '14.0" 2.8K 120Hz OLED Cảm ứng Đa điểm', addPrice: 0 },
        { name: '14.0" 2.8K 120Hz OLED Corning Gorilla Glass + Kèm Bút Cảm Ứng Tilt Pen', addPrice: 1500000 }
      ]
    }
  },
  {
    id: 'lenovo-thinkpad-x1',
    name: 'Lenovo ThinkPad X1 Carbon',
    brand: 'Lenovo',
    category: 'workstation',
    categoryLabel: 'Sáng Tạo & Studio',
    tag: 'Khuyên Dùng',
    screenSize: '16.0 INCH',
    subtitle: 'Sáng tạo & Studio, Màn hình 3.2K OLED, khung sợi carbon và hợp kim Magie siêu bền.',
    description: 'Biểu tượng tối thượng của giới doanh nhân và kỹ sư toàn cầu. Khung máy kết hợp sợi carbon dệt cao cấp và hợp kim Magie đúc áp lực siêu cứng cáp, vượt qua 12 tiêu chuẩn quân sự khắc nghiệt MIL-STD-810H.',
    basePrice: 45990000,
    highlightSpecs: {
      label1: 'Đồ họa',
      val1: 'RTX 4070 Studio 8GB',
      label2: 'Màn hình',
      val2: '16" 3.2K 120Hz Calibrated',
      label3: 'Bộ nhớ RAM',
      val3: 'Lên đến 64GB LPDDR5X'
    },
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBOyx2S62KqCJ_U29cBEuAyYH-SiCtZDtl1dr_5SC33oKOMSgr_8FO3tgoKdVaDjtonDgxiKIpFFTikix_QNlge4piNuDgQxGE-3uzjebzaaQqVirpsTuvdC7DtYX-tCQC7NCPCwRScORoP30Zad73YT_oPIkRgTdIVr9i6PRi6ZaUgEWCobnDquB-YW8R5sxYHp29ZNpmSQFn3CNph2PF8b2tfMhXvsK8WmfEHol5J1S8Xtip5B54',
    specs: {
      cpu: 'Intel Core Ultra 7 165U / Ultra 9 185H (vPro Enterprise)',
      gpu: 'NVIDIA GeForce RTX 4070 Studio 8GB GDDR6 (hoặc Intel Arc NPU)',
      ram: '32GB LPDDR5X 7500 MHz (Option tối đa 64GB)',
      storage: '1TB PCIe Gen 4 Performance M.2 2280 Opal 2.0',
      display: '16" 3.2K (3200 x 2000) OLED 120Hz, 100% DCI-P3, Dolby Vision, X-Rite Calibrated',
      weight: '1.09 kg',
      battery: '57Wh sạc nhanh Rapid Charge (80% trong 60 phút)',
      ports: '2x Thunderbolt 4, 2x USB-A 3.2 Gen 1, 1x HDMI 2.1, 1x Audio Jack 3.5mm, Khe Nano-SIM 5G tùy chọn',
      chassis: 'Nắp sợi Carbon dệt gia cường, đáy hợp kim Nhôm - Magie đúc chính xác',
      security: 'Bảo mật ThinkShield, Chip dTPM 2.0, Cảm biến vân tay Match-on-Chip, Camera IR nhận diện',
      warranty: '3 Năm Hỗ trợ Cao cấp Lenovo Premier Support VIP tận nơi'
    },
    finishes: [
      { id: 'carbon', name: 'Carbon Fiber Weave', colorHex: '#1E2024', material: 'Sợi carbon dệt lộ hoa văn thủ công' },
      { id: 'deep-black', name: 'Obsidian Black', colorHex: '#121316', material: 'Sơn phủ mềm mịn chống bám vân tay' }
    ],
    customizable: {
      cpus: [
        { name: 'Intel Core Ultra 7 165U vPro (12 Cores, NPU AI)', addPrice: 0 },
        { name: 'Intel Core Ultra 9 185H vPro (16 Cores, 5.1GHz)', addPrice: 4800000 }
      ],
      rams: [
        { name: '32GB LPDDR5X 7500 MHz', addPrice: 0 },
        { name: '64GB LPDDR5X 7500 MHz Siêu tốc', addPrice: 5200000 }
      ],
      storages: [
        { name: '1TB NVMe PCIe 4.0 Performance', addPrice: 0 },
        { name: '2TB NVMe PCIe 4.0 Performance', addPrice: 3200000 },
        { name: '4TB NVMe PCIe 4.0 Pro Studio', addPrice: 7900000 }
      ],
      displays: [
        { name: '16" 3.2K 120Hz OLED Calibrated HDR 500', addPrice: 0 },
        { name: '16" 3.2K 120Hz OLED Touch + Lớp chống lóa chuyên nghiệp', addPrice: 2200000 }
      ]
    }
  },
  {
    id: 'asus-rog-zephyrus-g16',
    name: 'Asus ROG Zephyrus G16',
    brand: 'Asus',
    category: 'gaming',
    categoryLabel: 'Gaming & Phòng Lab AI',
    screenSize: '16.0 INCH',
    subtitle: 'Gaming & AI Lab đỉnh cao, RTX 4080 / 4070, tản nhiệt buồng hơi Vapor Chamber siêu êm.',
    description: 'Thiết kế nhôm phay CNC tối giản chỉ 1.49cm, dải đèn Slash Lighting độc bản trên nắp máy. Động cơ đồ họa GeForce RTX series kết hợp hệ thống làm mát buồng hơi phủ kín bo mạch và kim loại lỏng Thermal Grizzly.',
    basePrice: 62990000,
    highlightSpecs: {
      label1: 'Công suất GPU',
      val1: '175W TGP Tối đa',
      label2: 'Tần số quét',
      val2: '240Hz 1ms OLED',
      label3: 'Hệ tản nhiệt',
      val3: 'Buồng hơi Kim loại lỏng'
    },
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDFvbxXp1dckLL1JkjS9WPSOljodHtkwtckJT_TNEVm0-4Vmvr47sxeKkVw6QfR6kxZ4N7kBoMqmSW_TZtpQ7uwviNQPNDthyZsejNdH4jGysJIgK1WCZv7EzTSDBFPcmvcLWe_ZkvE5RMOY28QPw5ktfdHSoM4dWdj_xRydG6Dl_7asKd7O7DinPcJqYi-AcajY8BUt2gJLo4po9ECdvzgD6QK1LoiimYytc6BINd4m07aD6vT4zA',
    specs: {
      cpu: 'Intel Core Ultra 9 185H (16 Nhân, 22 Luồng, Max Boost 5.1 GHz)',
      gpu: 'NVIDIA GeForce RTX 4080 Laptop GPU 12GB GDDR6 (TGP 175W with Dynamic Boost)',
      ram: '32GB LPDDR5X 7467 MHz Dual-Channel Onboard',
      storage: '2TB PCIe 4.0 NVMe M.2 Performance SSD (Kèm khe M.2 mở rộng)',
      display: '16" 2.5K (2560 x 1600) ROG Nebula OLED 240Hz 0.2ms, G-Sync, 100% DCI-P3, VESA True Black 500',
      weight: '1.85 kg',
      battery: '90Wh 4-cell Li-ion, Sạc nhanh Type-C 100W PD + Củ sạc 240W',
      ports: '1x Thunderbolt 4, 1x USB 3.2 Gen 2 Type-C (DP/PD), 2x USB 3.2 Gen 2 Type-A, 1x HDMI 2.1 FRL, 1x SD Card reader (UHS-II)',
      chassis: 'Khung nhôm CNC nguyên khối unibody, dải đèn LED Slash Lighting ma trận chéo',
      security: 'Camera IR FHD 1080p nhận diện khuôn mặt Windows Hello, Chip TPM 2.0',
      warranty: '2 Năm Asus VIP Quốc Tế (Bảo hành tận nơi 24/7)'
    },
    finishes: [
      { id: 'eclipse-gray', name: 'Eclipse Gray', colorHex: '#3D424D', material: 'Nhôm CNC phay xám mờ khói kim loại' },
      { id: 'platinum-white', name: 'Platinum White', colorHex: '#EAECEF', material: 'Nhôm Anode trắng ngọc trai chống ố' }
    ],
    customizable: {
      cpus: [
        { name: 'Intel Core Ultra 9 185H (NPU AI Engine)', addPrice: 0 }
      ],
      rams: [
        { name: '32GB LPDDR5X 7467 MHz', addPrice: 0 }
      ],
      storages: [
        { name: '2TB PCIe 4.0 NVMe SSD', addPrice: 0 },
        { name: '4TB Dual NVMe PCIe 4.0 (2x 2TB RAID 0)', addPrice: 4900000 }
      ],
      displays: [
        { name: '16" 2.5K 240Hz ROG Nebula OLED', addPrice: 0 }
      ]
    }
  },
  {
    id: 'dell-xps-16',
    name: 'Dell XPS 16 Titanium',
    brand: 'Dell',
    category: 'workstation',
    categoryLabel: 'Kiến Trúc Titanium',
    screenSize: '16.3 INCH',
    subtitle: 'Tuyệt tác kỹ nghệ vượt thời gian, Khung Titanium Grade 5 mỏng 11.2mm, màn hình 4K+ OLED InfinityEdge.',
    description: 'Đỉnh cao kỹ nghệ cơ khí đương đại với mặt kính bàn rê vô hình xúc giác lực, thanh phím cảm ứng điện dung tích hợp mượt mà. Vỏ ngoài gia công từ Titanium Grade 5 với độ chính xác đến từng micro-met.',
    basePrice: 68990000,
    highlightSpecs: {
      label1: 'Vật liệu khung',
      val1: 'Titanium Grade 5',
      label2: 'Chuẩn hiển thị',
      val2: '16.3" 4K+ OLED',
      label3: 'Đồ họa',
      val3: 'RTX 4070 8GB'
    },
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDKrjViwTHuU_nQpWaYL1gYh6eIoiyAhmWxXe9DXXiJT_u49cI7zMc2d0NRQTdhr8JeNN_kduwwsXjAETHkTdphVU4M_JYH8Q1dVn1rGA3rtMnSignYyf_BgcIFui22ruBqR9Bbur1mteoCOUKFJFrRcTFPj2omPGiXsSH9nG33oVvIhv7OJR8O8Dcj3COI0KIN9N9w59LHsc0_XwUTKETkGbokOOaHiqfX4V3spBreZd0aoDrZnoA',
    specs: {
      cpu: 'Intel Core Ultra 9 185H (16 Nhân 22 Luồng, 24MB Cache, up to 5.1 GHz)',
      gpu: 'NVIDIA GeForce RTX 4070 Laptop GPU 8GB GDDR6 (Tối ưu hóa Studio)',
      ram: '32GB LPDDR5X 7467 MHz Dual-channel (Option 64GB)',
      storage: '1TB PCIe 4.0 NVMe SSD (Nâng cấp tối đa 4TB)',
      display: '16.3" 4K+ (3840 x 2400) OLED InfinityEdge Touch, 400 nits, 100% DCI-P3, Gorilla Glass Victus',
      weight: '2.13 kg (Khung vỏ siêu mỏng 11.2mm)',
      battery: '99.5Wh (Mức tối đa cho phép mang lên máy bay), Sạc nhanh 130W Type-C GaN',
      ports: '3x Thunderbolt 4 (USB Type-C) với DisplayPort và Power Delivery, 1x Khe thẻ MicroSD v6.0, 1x Jack tai nghe 3.5mm',
      chassis: 'Khung máy hợp kim Titan Grade 5 kết hợp nhôm CNC và kính cường lực Gorilla Glass',
      security: 'Camera IR Windows Hello + Đầu đọc vân tay tích hợp nút nguồn Sapphire',
      warranty: '2 Năm Dell ProSupport Plus tận nhà VIP, bảo hiểm rơi vỡ chất lỏng'
    },
    finishes: [
      { id: 'titanium', name: 'Brushed Titanium', colorHex: '#646B78', material: 'Titan Grade 5 phay xước vi cơ' },
      { id: 'obsidian', name: 'Obsidian Slate', colorHex: '#1F2228', material: 'Đen nhám khói mạ PVD siêu chống trầy' }
    ],
    customizable: {
      cpus: [
        { name: 'Intel Core Ultra 9 185H (16 Cores, NPU AI)', addPrice: 0 }
      ],
      rams: [
        { name: '32GB LPDDR5X 7467 MHz', addPrice: 0 },
        { name: '64GB LPDDR5X 7467 MHz Tối thượng', addPrice: 6500000 }
      ],
      storages: [
        { name: '1TB PCIe 4.0 NVMe SSD', addPrice: 0 },
        { name: '2TB PCIe 4.0 NVMe SSD', addPrice: 3200000 },
        { name: '4TB PCIe 4.0 NVMe Enterprise SSD', addPrice: 7800000 }
      ],
      displays: [
        { name: '16.3" 4K+ (3840x2400) OLED InfinityEdge Cảm ứng', addPrice: 0 }
      ]
    }
  },
  {
    id: 'accessory-gan-charger',
    name: 'Củ sạc GaN Titanium 140W Multi-Port',
    brand: 'Dell',
    category: 'accessory',
    categoryLabel: 'Phụ kiện',
    screenSize: 'PHỤ KIỆN',
    subtitle: 'Công nghệ Gallium Nitride thế hệ 5, vỏ hợp kim titan phay xước, công suất 140W PD 3.1.',
    description: 'Bộ nguồn cao cấp chuẩn PD 3.1 cho phép sạc đầy máy trạm và 2 thiết bị di động cùng lúc với nhiệt độ vận hành mát hơn 30% so với sạc truyền thống.',
    basePrice: 1890000,
    highlightSpecs: {
      label1: 'Công suất',
      val1: '140W PD 3.1',
      label2: 'Cổng kết nối',
      val2: '3x Type-C, 1x USB-A',
      label3: 'Vật liệu',
      val3: 'Titanium Shell'
    },
    image: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=800&q=80',
    specs: {
      cpu: 'Vi mạch quản lý năng lượng GaNFast thế hệ mới',
      gpu: 'Không áp dụng',
      ram: 'Không áp dụng',
      storage: 'Không áp dụng',
      display: 'Đèn LED báo trạng thái sạc quang học',
      weight: '240 g',
      battery: 'Không áp dụng',
      ports: '3x USB-C PD 3.1 (Tối đa 140W), 1x USB-A QC 4.0',
      chassis: 'Vỏ hợp kim nhôm - titan tản nhiệt thụ động nguyên khối',
      security: '10 lớp bảo vệ: Quá nhiệt, quá dòng, chống sốc sét',
      warranty: '2 Năm 1 đổi 1 tận nơi'
    },
    finishes: [
      { id: 'titanium', name: 'Brushed Titanium', colorHex: '#646B78', material: 'Vỏ hợp kim titan' },
      { id: 'dark-gray', name: 'Dark Slate', colorHex: '#2A2D34', material: 'Xám nòng súng' }
    ],
    customizable: {}
  },
  {
    id: 'accessory-mechanical-keyboard',
    name: 'Bàn phím cơ Low-Profile Aether Slate',
    brand: 'Lenovo',
    category: 'accessory',
    categoryLabel: 'Phụ kiện',
    screenSize: 'PHỤ KIỆN',
    subtitle: 'Khung nhôm hàng không CNC, Switch quang học xúc giác êm ái, kết nối 3 chế độ.',
    description: 'Được tiện gọt từ nhôm nguyên khối chỉ dày 9.5mm, keycap PBT Doubleshot công nghệ nhiệt. Tương thích hoàn hảo Windows & macOS với kết nối không độ trễ 2.4GHz và Bluetooth 5.3.',
    basePrice: 4290000,
    highlightSpecs: {
      label1: 'Độ mỏng',
      val1: '9.5 mm',
      label2: 'Thời lượng pin',
      val2: '180 giờ',
      label3: 'Switch',
      val3: 'Low-profile Tactile'
    },
    image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80',
    specs: {
      cpu: 'Bộ điều khiển ARM Cortex-M4 32-bit',
      gpu: 'Không áp dụng',
      ram: 'Bộ nhớ lưu 5 hồ sơ macro',
      storage: 'Không áp dụng',
      display: 'Không áp dụng',
      weight: '580 g',
      battery: 'Pin Li-Po 4000mAh (Thời lượng 180 giờ)',
      ports: 'Type-C mạ vàng tháo rời',
      chassis: 'Nhôm hàng không 6000 series phay CNC nguyên khối',
      security: 'Mã hóa truyền tin không dây AES-128 bit',
      warranty: '2 Năm 1 đổi 1 chính hãng'
    },
    finishes: [
      { id: 'slate', name: 'Titanium Slate', colorHex: '#5A6270', material: 'Nhôm CNC phay xám' },
      { id: 'black', name: 'Midnight Obsidian', colorHex: '#1B1C20', material: 'Đen mạ Anode' }
    ],
    customizable: {}
  }
];

export interface ComparisonRow {
  label: string;
  category: string;
  hp: string;
  lenovo: string;
  asus: string;
  dell: string;
}

export const COMPARISON_ROWS: ComparisonRow[] = [
  {
    label: 'Mục đích sử dụng',
    category: 'TỔNG QUAN',
    hp: 'Doanh nhân, Văn phòng cao cấp',
    lenovo: 'Doanh nghiệp, Lập trình & Di động',
    asus: 'Gaming AAA, Đồ họa 3D & AI',
    dell: 'Sáng tạo chuyên nghiệp, Studio'
  },
  {
    label: 'Bộ vi xử lý (CPU)',
    category: 'HIỆU NĂNG',
    hp: 'Intel Core Ultra 7 155H',
    lenovo: 'Intel Core Ultra 7 165U / Ultra 9',
    asus: 'Intel Core Ultra 9 185H',
    dell: 'Intel Core Ultra 9 185H (16 Cores)'
  },
  {
    label: 'Đồ họa (GPU)',
    category: 'HIỆU NĂNG',
    hp: 'Intel Arc Graphics',
    lenovo: 'Intel Arc Graphics (NPU AI Boost)',
    asus: 'NVIDIA RTX 4080 (12GB) / RTX 4070',
    dell: 'NVIDIA RTX 4070 Laptop (8GB)'
  },
  {
    label: 'Màn hình hiển thị',
    category: 'HIỂN THỊ',
    hp: '14" 2.8K 120Hz OLED Cảm ứng',
    lenovo: '14" 2.8K 120Hz OLED HDR 500',
    asus: '16" 2.5K 240Hz OLED ROG Nebula',
    dell: '16.3" 4K+ OLED InfinityEdge'
  },
  {
    label: 'Bộ nhớ & Lưu trữ',
    category: 'BỘ NHỚ',
    hp: '16GB RAM / 1TB PCIe 4.0',
    lenovo: '32GB LPDDR5X / 1TB PCIe 4.0',
    asus: '32GB LPDDR5X / 2TB PCIe 4.0',
    dell: '32GB LPDDR5X / 1TB PCIe 4.0'
  },
  {
    label: 'Trọng lượng',
    category: 'THIẾT KẾ',
    hp: '1.44 kg',
    lenovo: '1.09 kg',
    asus: '1.85 kg',
    dell: '2.13 kg'
  },
  {
    label: 'Chính sách bảo hành',
    category: 'DỊCH VỤ',
    hp: '2 Năm Bảo hành tận nơi HP VIP',
    lenovo: '3 Năm Hỗ trợ Cao cấp Lenovo Premier',
    asus: '2 Năm Asus VIP Quốc tế',
    dell: '2 Năm Dell ProSupport Tận nơi'
  }
];

export const COMPARISON_PRICES = {
  hp: {
    price: '38.990.000₫',
    num: 38990000,
    action: 'Chọn Cấu Hình',
    productId: 'hp-spectre-14',
    isPrimary: false
  },
  lenovo: {
    price: '46.990.000₫',
    num: 46990000,
    action: 'Đặt Mua Ngay',
    productId: 'lenovo-thinkpad-x1',
    isPrimary: true
  },
  asus: {
    price: '62.990.000₫',
    num: 62990000,
    action: 'Chọn Cấu Hình',
    productId: 'asus-rog-zephyrus-g16',
    isPrimary: false
  },
  dell: {
    price: '68.990.000₫',
    num: 68990000,
    action: 'Chọn Cấu Hình',
    productId: 'dell-xps-16',
    isPrimary: false
  }
};
