---
{"dg-publish":true,"permalink":"/notes/master-thesis/5-appendix/","hide":"true","updated":"2025-06-04T14:26:42.326+02:00"}
---

Jump back to ==[[Notes/Master Thesis/Master Thesis#Table of contents\|chapter selection]]==.

---
**Table of Contents**

[[Notes/Master Thesis/5 Appendix#5.1 Proof of Schottky's Theorem for Shot Noise\|5.1 Proof of Schottky's Theorem for Shot Noise]]
[[Notes/Master Thesis/5 Appendix#5.2 Modulation Instabilities\|5.2 Modulation Instabilities]]
[[Notes/Master Thesis/5 Appendix#5.3 Autocorrelator\|5.3 Autocorrelator]]
[[Notes/Master Thesis/5 Appendix#5.4 Diagnostics Measurements\|5.4 Diagnostics Measurements]]
[[Notes/Master Thesis/5 Appendix#5.5 Welch's Method to Obtain Power Spectral Density Estimates\|5.5 Welch's Method to Obtain Power Spectral Density Estimates]]

---
# 5 Appendix

The purpose of this appendix is to offer additional context on certain topics that were considered too extensive to include in the main body of this thesis. Given that the primary focus of this thesis is experimental, theoretical aspects, including derivations and proofs, are provided here for completeness.

---
## 5.1 Proof of Schottky's Theorem for Shot Noise
 [[Master Thesis/ulp-stud/Thesis/Koeberlin_Master_Thesis.pdf#page=73&selection=7,0,7,42| ]]
 
Schottky's theorem is a fundamental result in electronics, stating that the shot noise power spectral density (PSD) is proportional to the average current.

**Proof**
While current flow appears continuous, the discrete nature of charge carriers (such as electrons) leads to random arrival times at the detector, which can be modelled as a Poisson process. The current arriving at the detector at any given time can be expressed as

$$I(t)=\sum_{j} e \delta(t-t_j),$$

where $t_j$ represents the random arrival times of the charge carriers. The Wiener-Khinchin theorem connects the autocorrelation function of a signal to its PSD:

$$S_x(f)=2 \int_{-\infty}^{\infty} R_x(\tau) e^{-i2\pi f \tau} d\tau = 2 \mathcal{F}\{R_x(\tau)\}(f),$$

where the autocorrelation function is defined as

$$R_x(\tau)=\lim_{T\to\infty} \frac{1}{T} \int_{-T/2}^{T/2} x(t) x(t+\tau) dt.$$

Applying this to the problem, with $x(t)=I(t)$, we have

$$
\begin{aligned}
R_{\text{shot}}(\tau) &= \lim_{T\to\infty} \frac{1}{T} \int_{-T/2}^{T/2} I(t)I(t+\tau)dt \\
&= \lim_{T\to\infty} \frac{e^2}{T} \sum_j \sum_k \int_{-T/2}^{T/2} \delta(t-t_j)\delta(t-t_k+\tau)dt.
\end{aligned}
$$

Evaluating the integral:

$$\int_{-T/2}^{T/2} \delta(t-t_j)\delta(t-t_k+\tau)dt = \begin{cases} \delta(t_j-t_k+\tau), & \text{if } -T/2 < t_j < T/2 \\ 0, & \text{otherwise} \end{cases}$$

This leads to

$$R_{\text{shot}}(\tau) = \lim_{T\to\infty} \frac{e^2}{T} \sum_{\substack{j \\ -T/2 < t_j < T/2}} \sum_k \delta(t_j-t_k+\tau).$$

Care must be taken when evaluating this expression. For $j=k$, the times match, and we obtain $\delta(\tau)$. Assuming there are $N$ terms for which the time constraint is satisfied, this yields a contribution of $N\delta(\tau)$. For $j \neq k$, the delta functions are randomly distributed, and with appropriate averaging, their contributions to the autocorrelation function cancel out. It is important to note, however, that this "appropriate averaging" is a non-trivial process, and therefore, it will not be elaborated upon here.

Thus, we are left with

$$R_{\text{shot}}(\tau) = N \frac{e^2}{T} \delta(\tau) = e\bar{I}\delta(\tau),$$

where $\bar{I}$ is the average current, defined as the number of charges per unit time. The PSD is then obtained as

$$S_{\text{shot}}(f) = 2\mathcal{F}\{e\bar{I}\delta(\tau)\}(f) = 2e\bar{I}.$$

This concludes the proof.

It is worth noting that this result holds even if the current pulses are not modelled as delta functions but as square pulses. If the pulses have a duration $\tau_{pulse}$, the resulting PSD is given by (without proof)

$$S_{\text{shot}}(f) = 2e\bar{I}\left(\frac{\sin(\pi f \tau_{pulse})}{\pi f \tau_{pulse}}\right)^2.$$

While this expression differs from the earlier result, it is important to consider that $\tau_{pulse}$ is the mean transit time of electrons, typically on the order of $10 \text{ ps}$. Therefore, the cut-off frequency is $f=1/\tau_{pulse} \approx 100 \text{ GHz}$, meaning that the assumption of shot noise being white noise is valid for most practical circuits.

---
## 5.2 Modulation Instabilities
 [[Master Thesis/ulp-stud/Thesis/Koeberlin_Master_Thesis.pdf#page=75&selection=4,0,4,24| ]]
 
To begin the discussion, it is essential to recognise that the nonlinear coefficient, $\gamma$, is generally frequency-dependent, that is, $\gamma=\gamma(\omega)$. Additionally, approximating the dispersion as a polynomial truncated at the second order may not always be sufficient. This section closely follows established derivations and discussions, for instance, those found in seminal texts on nonlinear fibre optics. Therefore, we start with a generalised form of the Nonlinear Schrödinger Equation (NLSE):

$$\frac{\partial \tilde{A}(\omega-\omega_0)}{\partial z} + i\left(k(\omega)-k(\omega_0)-\frac{\omega-\omega_0}{v_g(\omega_0)}\right) \tilde{A}(\omega-\omega_0) = -i\gamma(\omega)\mathcal{F}\{|A|^2 A\},$$

where $v_g$ is the group velocity, and $\omega_0$ represents the centre or envelope frequency of a pulse. Let $\Omega=\omega-\omega_0$. To ensure consistency in the NLSE presented above, note that the term in brackets, $k(\omega)-k(\omega_0)-\frac{\omega-\omega_0}{v_g(\omega_0)}$, can be expanded using a Taylor series of $k(\omega)$ around $\omega_0$. Given that $k'(\omega_0) = 1/v_g(\omega_0)$, this term simplifies to $\frac{k''(\omega_0)}{2}\Omega^2 + \frac{k'''(\omega_0)}{6}\Omega^3 + \dots$.

Consider a continuous wave (CW) centred around $\omega_0$:

$$\frac{\partial \tilde{A}_{\text{cw}}}{\partial z} = -i\gamma(\omega_0)\mathcal{F}\{|A_{\text{cw}}|^2 A_{\text{cw}}\} = -i\gamma(\omega_0)P_0 A_{\text{cw}},$$

where the field normalisation ensures that the absolute square of the amplitude represents the power in the fibre. This leads to a nonlinear phase shift:

$$\tilde{A}_{\text{cw}}(z) = \tilde{A}_{\text{cw}}(z=0)e^{-i\gamma(\omega_0)P_0 z}.$$

Next, we express the electric field as a perturbation:

$$A(z,t) = [A_{\text{cw}} + a(z,t)]e^{-i\gamma(\omega_0)P_0 z},$$

where the perturbation $a(z,t)$ is small, allowing us to neglect second and higher-order terms. Substituting this into the $|A|^2 A$ term in the NLSE gives:

$$|A|^2 A \approx (|A_{\text{cw}}|^2 A_{\text{cw}} + 2|A_{\text{cw}}|^2 a + A_{\text{cw}}^2 a^*)e^{-i\gamma(\omega_0)P_0 z}.$$

Thus, the NLSE for the perturbation $\tilde{a}(\Omega)$ becomes:

$$
-i\gamma(\omega_0)|A_{\text{cw}}|^2 \tilde{a}(\Omega) + \frac{\partial \tilde{a}(\Omega)}{\partial z} + iK(\Omega)\tilde{a}(\Omega) = -i\gamma(\omega_0+\Omega)[2|A_{\text{cw}}|^2 \tilde{a}(\Omega) + A_{\text{cw}}^2 \tilde{a}^*(-\Omega)],
$$

where the dispersion term is defined as:

$$K(\Omega) = k(\omega_0+\Omega) - k(\omega_0) - \frac{\Omega}{v_g(\omega_0)} = \sum_{m=2}^{\infty} \frac{k^{(m)}(\omega_0)}{m!}\Omega^m.$$

If $\gamma(\omega)$ is frequency-independent (i.e. $\gamma(\omega) = \gamma_0$), we obtain a matrix equation by considering the equations for $\tilde{a}(\Omega)$ and $\tilde{a}^*(-\Omega)$:

$$
\frac{\partial}{\partial z}\begin{bmatrix} \tilde{a}(\Omega) \\ \tilde{a}^*(-\Omega) \end{bmatrix} = i\begin{bmatrix} -K(\Omega) - \gamma_0 P_0 & \gamma_0 P_0 \\ \gamma_0 P_0 & K(-\Omega) + \gamma_0 P_0 \end{bmatrix} \begin{bmatrix} \tilde{a}(\Omega) \\ \tilde{a}^*(-\Omega) \end{bmatrix}.
$$

The eigenvalues of the resulting coupling matrix indicate the gain for spectral sidebands at frequency shifts of $\pm\Omega$:

$$\lambda_{\pm} = \frac{i}{2}\left(K(-\Omega)-K(\Omega) \pm \sqrt{(K(-\Omega)+K(\Omega))} \sqrt{(K(-\Omega)+K(\Omega)) + 4\gamma_0 P_0}\right),$$

which reduces to:

$$\lambda_{\pm}^{\text{standard}} = \frac{i}{2}\left(\pm \sqrt{\beta_2\Omega^2} \sqrt{\beta_2\Omega^2 + 4\gamma_0 P_0}\right)$$

in the standard case where only second-order dispersion is considered, $K(\Omega) \approx \frac{\beta_2}{2}\Omega^2$, so $K(\Omega)+K(-\Omega) \approx \beta_2\Omega^2$ (assuming $\beta_2 = k''(\omega_0)$ is real and other even order dispersion terms are negligible). For negative group velocity dispersion (GVD) $(\beta_2 < 0)$, the term under the square root can become negative, leading to real $\lambda$ and thus gain, until the frequency shift $\Omega$ reaches a sufficient value. The gain and loss parts of the eigenvalues depend on $K(\Omega)+K(-\Omega)$, which involves only even orders of dispersion.

By defining $\Delta k(\Omega)=K(-\Omega)+K(\Omega)=k(\omega_0-\Omega)+k(\omega_0+\Omega)-2k(\omega_0)$, we express the gain eigenvalues (where $\lambda$ is real) as:

$$\lambda_{\pm}^{\text{gain}} = \pm \frac{1}{2}\sqrt{-\Delta k(\Omega)(\Delta k(\Omega) + 4\gamma_0 P_0)}.$$

The parameter $\gamma_0 P_0$ is associated with the CW intensity, indicating the presence or absence of modulation instability gain at different frequencies. As shown in the next figure, the behaviour of the modulation instabilities is characterised by the wavenumber shift and the corresponding power gain across different optical frequencies. The figure illustrates how the instabilities predominantly exhibit significant gain far from the central optical frequency of the laser, indicating that these instabilities are not relevant in the frequency range of interest.

![Attachments/Koeberlin_Master_Thesis 46.webp|700](/img/user/Attachments/Koeberlin_Master_Thesis%2046.webp)[[Master Thesis/ulp-stud/Thesis/Koeberlin_Master_Thesis.pdf#page=78&rect=113,218,490,708| ]]
Overview of modulation instabilities in the fibre. (a) The group velocity dispersion (GVD) data shows the raw GVD values across different optical frequencies, with a marker at the centre wavelength highlighting the GVD used in calculations. (b) Wavenumber shift as a function of optical frequency, comparing the full model and the model considering only the GVD contribution. The horizontal dashed line represents the constant term $4\gamma P_0$. (c) Power gain in dB for the cases considering only GVD and the full model, showing significant differences away from the centre frequency. (d) Nonlinear gain across optical frequencies, illustrating the gain behaviour influenced by nonlinear effects. The x-axis is shared among all subplots, representing optical frequency in THz.

---
## 5.3 Autocorrelator
 [[Master Thesis/ulp-stud/Thesis/Koeberlin_Master_Thesis.pdf#page=77&selection=4,0,4,14| ]]

As pulse durations become shorter than $1 \text{ ps}$, which is beyond the electronic time resolution, measuring pulse width using purely electronic means becomes increasingly difficult. A widely used method for characterising ultrashort pulses is intensity autocorrelation, which employs second harmonic generation (SHG), as depicted in the next figure. The following description closely follows established explanations found in literature on ultrashort pulses.

![Attachments/Koeberlin_Master_Thesis 47.webp|700](/img/user/Attachments/Koeberlin_Master_Thesis%2047.webp)[[Master Thesis/ulp-stud/Thesis/Koeberlin_Master_Thesis.pdf#page=79&rect=121,543,497,705| ]]

In this method, a beamsplitter divides the incident laser beam into two beams of identical intensity. One of the beam paths is delayed relative to the other by a time $\tau$. Both beams are then focused into a nonlinear crystal where they overlap in both space and time. Due to the nonlinear properties of the crystal, SHG occurs, generating a signal at twice the frequency of the original beam ($2\omega$). The intensity of this SHG signal depends on the time delay $\tau$ between the two pulses.

It can be shown that the SHG signal is minimal when the pulses do not overlap temporally and reaches a maximum when they are perfectly overlapped in time. Due to momentum conservation and the non-collinear configuration of the incident beams, the frequency-doubled signal appears spatially between the two original beams. An aperture can be used to isolate and measure only the SHG signal's intensity:

$$I_{2\omega}(\tau) \sim \int_{-\infty}^{\infty} |E(t)E(t+\tau)|^2 dt = \int_{-\infty}^{\infty} I(t)I(t+\tau)dt.$$

Since this intensity is symmetric with respect to the delay, that is, $I_{2\omega}(\tau) = I_{2\omega}(-\tau)$, the autocorrelation measurement cannot reveal asymmetries in the pulse. To accurately extract the pulse duration, an assumption about the pulse shape is required, as the autocorrelation trace alone does not provide detailed information about the pulse's shape or structure.

---
## 5.4 Diagnostics Measurements
 [[Master Thesis/ulp-stud/Thesis/Koeberlin_Master_Thesis.pdf#page=77&selection=128,0,128,24| ]]
 
This section presents various measurements from the optical spectrum analyser (OSA), microwave spectrum analyser (MSA), and autocorrelator for completeness. The results are shown in Figures 4.3 to 4.5.

![Attachments/Koeberlin_Master_Thesis 48.webp|700](/img/user/Attachments/Koeberlin_Master_Thesis%2048.webp)[[Master Thesis/ulp-stud/Thesis/Koeberlin_Master_Thesis.pdf#page=79&rect=152,206,463,402| ]]
Combined diagnostic results from the microwave spectrum analyser (MSA) with a resolution bandwidth of $3 \text{ kHz}$, autocorrelator, and optical spectrum analyser (OSA). The red line indicates an ideal soliton pulse fit. Measurement performed at $173 \text{ W}$ pump power.

![Attachments/Koeberlin_Master_Thesis 49.webp|700](/img/user/Attachments/Koeberlin_Master_Thesis%2049.webp)[[Master Thesis/ulp-stud/Thesis/Koeberlin_Master_Thesis.pdf#page=80&rect=149,507,466,705| ]]
Combined diagnostic results from the microwave spectrum analyser (MSA) with a resolution bandwidth of $3 \text{ kHz}$, autocorrelator, and optical spectrum analyser (OSA). The red line indicates an ideal soliton pulse fit. Measurement performed at $191 \text{ W}$ pump power.

![Attachments/Koeberlin_Master_Thesis 50.webp|700](/img/user/Attachments/Koeberlin_Master_Thesis%2050.webp)[[Master Thesis/ulp-stud/Thesis/Koeberlin_Master_Thesis.pdf#page=80&rect=151,204,466,403| ]]
Combined diagnostic results from the microwave spectrum analyser (MSA) with a resolution bandwidth of $3 \text{ kHz}$, autocorrelator, and optical spectrum analyser (OSA). The red line indicates an ideal soliton pulse fit. Measurement performed at $214 \text{ W}$ pump power.

---
## 5.5 Welch's Method to Obtain Power Spectral Density Estimates
 [[Master Thesis/ulp-stud/Thesis/Koeberlin_Master_Thesis.pdf#page=81&selection=4,0,5,7| ]]

As described in [[Notes/Master Thesis/3 Setup, Characterisation and Results#3.5.3 Optimising Sampling Rate for Accurate Noise Measurement\|Section 3.5.3]], Welch's method was employed to smooth the noise PSD data and provide visual clarity. Welch's method is a widely-used approach for estimating the power spectral density of a signal. Unlike a basic periodogram, which can be noisy and less reliable due to its high variance, Welch's method provides a smoother and more reliable estimate by averaging multiple periodograms of overlapping data segments. The initial noise in the data results from the fact that the experiment was conducted with a finite sampling rate and over a finite measurement time. If both the sampling rate and time were infinite, the resulting curve would appear smooth, as the non-stationary signal components would diminish. The process of Welch's method can be broken down into the following steps:

1.  The signal is divided into 100 overlapping segments, with an $80\%$ overlap used between successive segments. Overlapping reduces information loss at the segment boundaries and provides more samples for averaging.
2.  A window function, in this case a Hann window, is applied to each segment to minimise spectral leakage. This reduces spectral leakage by avoiding sharp discontinuities at the segment boundaries.
3.  For each windowed segment, the Fast Fourier Transform (FFT) is used to compute the periodogram, which provides the PSD estimate for that segment.
4.  Finally, the periodograms of all segments are averaged to produce the overall PSD estimate, reducing variance and creating a smoother representation of the spectral density.

The main strength of Welch's method lies in its ability to reduce the variance of PSD estimates. Compared to a single periodogram, Welch's method is much less sensitive to fluctuations in the data, offering a more stable and reliable representation of the signal's frequency content. In this thesis, it was employed to reveal the shot-noise limit and distinguish the signal from noise in the high-power laser system. However, the primary trade-off is a reduction in frequency resolution. Additionally, Welch's method increases the computational load, as the FFT must be applied multiple times across the overlapping segments.

---