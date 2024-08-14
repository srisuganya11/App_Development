package com.example.backend.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.util.List;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
            .csrf(csrf -> csrf.disable())  // Disable CSRF protection for simplicity
            .cors(cors -> cors.configurationSource(corsConfigurationSource())) // Enable CORS
            .authorizeRequests(auth -> auth
                .requestMatchers(
                    "/api/v1/admin/register", "/api/v1/admin/login",
                    "/api/v1/user/register", "/api/v1/user/login"
                ).permitAll() // Allow unauthenticated access to admin and user registration/login
                .requestMatchers(
                    "/api/contact/submit", "/api/contact/messages", "/api/contact/message/**",
                    "/api/payment/submit2", "/api/payment/all", "/api/payment/all/**",
                    "/api/swapping/dresses", "/api/swapping/dresses/**"
                ).permitAll() // Allow unauthenticated access to contact, payment, and swapping endpoints
                .anyRequest().authenticated() // All other endpoints require authentication
            );

        return http.build();
    }

    @Bean
    public CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration configuration = new CorsConfiguration();
        configuration.setAllowedOrigins(List.of("http://localhost:3000", "http://localhost:3001")); // Allow these origins
        configuration.setAllowedMethods(List.of("GET", "POST", "PUT", "DELETE", "OPTIONS")); // Allow these methods
        configuration.setAllowedHeaders(List.of("*")); // Allow all headers
        configuration.setAllowCredentials(true); // Allow credentials (cookies, authorization headers, etc.)

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration); // Apply this configuration to all endpoints
        return source;
    }
}
