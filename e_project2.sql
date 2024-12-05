-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 08, 2024 at 02:59 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `e_project2`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin_users`
--

CREATE TABLE `admin_users` (
  `id` int(11) NOT NULL,
  `name` varchar(50) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `password` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `admin_users`
--

INSERT INTO `admin_users` (`id`, `name`, `email`, `password`) VALUES
(2, 'Ali', 'Ali@gmail.com', 'ali'),
(3, 'Talha', 'talha@gmail.com', 'talha'),
(4, 'rimsha', 'rimsha@gmail.com', 'rimsha');

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `id` int(11) NOT NULL,
  `cat_name` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`id`, `cat_name`) VALUES
(5, 'Cosmetics'),
(6, 'Perfumes'),
(7, 'Jewellery'),
(8, 'Skin Care');

-- --------------------------------------------------------

--
-- Table structure for table `customer_details`
--

CREATE TABLE `customer_details` (
  `id` int(11) NOT NULL,
  `c_name` varchar(50) DEFAULT NULL,
  `c_email` varchar(100) DEFAULT NULL,
  `c_mob` varchar(20) DEFAULT NULL,
  `c_address` varchar(150) DEFAULT NULL,
  `c_dob` date DEFAULT NULL,
  `order_date` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `customer_details`
--

INSERT INTO `customer_details` (`id`, `c_name`, `c_email`, `c_mob`, `c_address`, `c_dob`, `order_date`) VALUES
(1, 'Ali', 'Ali@gmail.com', '923456712', 'abc street, karachi', '2000-10-21', '2024-10-04 13:51:42'),
(7, 'Talha', 'talha@gmail.com', '9267348398', 'abc street, Lahore', '2024-10-24', '2024-10-05 18:42:20'),
(8, 'Ashr', 'ashr@gmail.com', '9456789965', 'abc street, Lahore', '2024-10-29', '2024-10-05 18:44:47'),
(9, 'ayaan', 'ayaan@gmail.com', '924657649857', 'abc street, Lahore', '2024-10-08', '2024-10-05 23:37:55');

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `id` int(11) NOT NULL,
  `order_id` int(11) DEFAULT NULL,
  `product_title` varchar(60) DEFAULT NULL,
  `product_quantity` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`id`, `order_id`, `product_title`, `product_quantity`) VALUES
(1, 1, 'LipStick', 1),
(2, 1, 'Highlighter', 1),
(13, 7, 'Chanel', 1),
(14, 7, 'Moisterizer', 1),
(15, 8, 'Sultan', 1),
(16, 8, 'Haider', 1),
(17, 9, 'Wedding Bands', 1),
(18, 9, 'Bangles', 1);

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `pro_name` varchar(50) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `pro_img` varchar(50) DEFAULT NULL,
  `price` varchar(50) DEFAULT NULL,
  `cat_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `pro_name`, `description`, `pro_img`, `price`, `cat_id`) VALUES
(3, 'Haider', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus quae exercitationem distinctio, enim alias maiores laborum quo voluptatum atque repellat.', 'perfume-1.webp', '60', 6),
(5, 'Sultan', 'loreifjonovnoiusnviub ndsnviusbvufb nvusanbviubvai', 'perfume-2.webp', '34', 6),
(6, 'Chanel', 'ishdiuOF IUEFHA IUEFAGF UHFOAGF', 'perfume-3.jpg', '190', 6),
(7, 'Moisterizer', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid maxime, repudiandae enim necessitatibus autem accusantium accusamus natus placeat omnis perferendis!', 'skin-care-1.jpeg', '99', 8),
(8, 'Selena', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid maxime, repudiandae enim necessitatibus autem accusantium accusamus natus placeat omnis perferendis!', 'perfume-4.jpeg', '25', 6),
(9, 'LipStick', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid maxime, repudiandae enim necessitatibus autem accusantium accusamus natus placeat omnis perferendis!', 'cosmetics-2.jpg', '12', 5),
(10, 'Skin Serum', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid maxime, repudiandae enim necessitatibus autem accusantium accusamus natus placeat omnis perferendis!', 'skin-care-2.jpeg', '40', 8),
(11, 'Night Cream', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid maxime, repudiandae enim necessitatibus autem accusantium accusamus natus placeat omnis perferendis!', 'skin-care-3.jpg', '34', 8),
(12, 'Highlighter', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid maxime, repudiandae enim necessitatibus autem accusantium accusamus natus placeat omnis perferendis!', 'cosmetics-1.jpg', '134', 5),
(13, 'Blush', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid maxime, repudiandae enim necessitatibus autem accusantium accusamus natus placeat omnis perferendis!', 'cosmetics-3.jpg', '69', 5),
(14, 'Face Powder', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid maxime, repudiandae enim necessitatibus autem accusantium accusamus natus placeat omnis perferendis!', 'cosmetic-4.jpg', '123', 5),
(15, 'Eye Shadow', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid maxime, repudiandae enim necessitatibus autem accusantium accusamus natus placeat omnis perferendis!', 'cosmetic-6.jpg', '45', 5),
(16, 'Wedding Bands', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid maxime, repudiandae enim necessitatibus autem accusantium accusamus natus placeat omnis perferendis!', 'jewellery-1.webp', '500', 7),
(17, 'Bangles', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid maxime, repudiandae enim necessitatibus autem accusantium accusamus natus placeat omnis perferendis!', 'jewellery-2.webp', '300', 7),
(18, 'Necklace', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid maxime, repudiandae enim necessitatibus autem accusantium accusamus natus placeat omnis perferendis!', 'jewellery-3.webp', '800', 7);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin_users`
--
ALTER TABLE `admin_users`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `customer_details`
--
ALTER TABLE `customer_details`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`),
  ADD KEY `order_id` (`order_id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `cat_id` (`cat_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin_users`
--
ALTER TABLE `admin_users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `customer_details`
--
ALTER TABLE `customer_details`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`order_id`) REFERENCES `customer_details` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
