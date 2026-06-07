---
{"dg-publish":true,"permalink":"/notes/signals-and-systems/10-discrete-fourier-transform-and-fft/","hide":"true","updated":"2026-06-07T20:09:33.504+02:00"}
---

Jump back to ==[[Notes/Signals and Systems/Signals and Systems#Table of Contents\|chapter selection]]==.

---
**Table of Contents**

[[Notes/Signals and Systems/10 Discrete Fourier Transform and FFT#10.1 From DTFT to DFT\|10.1 From DTFT to DFT]]
[[Notes/Signals and Systems/10 Discrete Fourier Transform and FFT#10.2 DFT Properties\|10.2 DFT Properties]]
[[Notes/Signals and Systems/10 Discrete Fourier Transform and FFT#10.3 Circular and Linear Convolution\|10.3 Circular and Linear Convolution]]
[[Notes/Signals and Systems/10 Discrete Fourier Transform and FFT#10.4 Spectral Leakage and Windowing\|10.4 Spectral Leakage and Windowing]]
[[Notes/Signals and Systems/10 Discrete Fourier Transform and FFT#10.5 Fast Fourier Transform\|10.5 Fast Fourier Transform]]
[[Notes/Signals and Systems/10 Discrete Fourier Transform and FFT#10.6 Short-Time Fourier Analysis\|10.6 Short-Time Fourier Analysis]]

---
# 10 Discrete Fourier Transform and FFT
[ ](/img/user/Reading/Books/Electrical%20Engineering%20and%20Signal%20Processing/Discrete-Time%20Signal%20Processing%20Oppenheimer.pdf)

The DTFT is the natural Fourier representation for infinite-length discrete-time signals, but it is still a continuous function of frequency. Computers need finite lists of numbers. The discrete Fourier transform (DFT) turns a finite sequence into a finite list of frequency samples, and the fast Fourier transform (FFT) computes that list efficiently.

This chapter is therefore the bridge from transform theory to numerical signal processing.

---
## 10.1 From DTFT to DFT
[ ](/img/user/Reading/Books/Electrical%20Engineering%20and%20Signal%20Processing/Discrete-Time%20Signal%20Processing%20Oppenheimer.pdf)

For a length-$N$ sequence $x[n]$, defined for $0\leq n\leq N-1$, the DFT is
$$
X[k]=\sum_{n=0}^{N-1}x[n]e^{-j2\pi kn/N},
\qquad k=0,1,\ldots,N-1.
$$
The inverse DFT is
$$
x[n]=\frac{1}{N}\sum_{k=0}^{N-1}X[k]e^{j2\pi kn/N},
\qquad n=0,1,\ldots,N-1.
$$
The DFT basis functions are sampled complex exponentials. The frequency represented by bin $k$ is
$$
\omega_k=\frac{2\pi k}{N}.
$$
Because discrete-time frequency is periodic with period $2\pi$, bins near $N$ correspond to negative frequencies:
$$
\omega_{N-r}=2\pi-\frac{2\pi r}{N}\equiv -\frac{2\pi r}{N}.
$$

The DFT can be understood in two equivalent ways:

- as the Fourier series coefficients of a periodic sequence with period $N$;
- as samples of the DTFT of a finite-duration sequence at $\omega_k=2\pi k/N$.

If $x[n]$ is finite duration and zero outside $0\leq n<N$, its DTFT is
$$
X(e^{j\omega})=\sum_{n=0}^{N-1}x[n]e^{-j\omega n}.
$$
The DFT samples this at equally spaced frequencies:
$$
X[k]=X(e^{j\omega})\bigg|_{\omega=2\pi k/N}.
$$

This distinction matters. The DFT itself always assumes periodicity in both domains:
$$
x[n+N]=x[n],
\qquad
X[k+N]=X[k].
$$
When using the DFT to analyse a finite segment of a longer signal, we are implicitly windowing the signal and periodically extending that windowed segment.

---
## 10.2 DFT Properties
[ ](/img/user/Reading/Books/Electrical%20Engineering%20and%20Signal%20Processing/Discrete-Time%20Signal%20Processing%20Oppenheimer.pdf)

The DFT has properties analogous to the DTFT, but all indexing is modulo $N$.

If
$$
x[n]\leftrightarrow X[k],
\qquad
y[n]\leftrightarrow Y[k],
$$
then:

| Property | Time domain | DFT domain |
| :-- | :-- | :-- |
| Linearity | $ax[n]+by[n]$ | $aX[k]+bY[k]$ |
| Circular time shift | $x[(n-n_0)_N]$ | $e^{-j2\pi kn_0/N}X[k]$ |
| Frequency shift | $e^{j2\pi k_0n/N}x[n]$ | $X[(k-k_0)_N]$ |
| Time reversal | $x[(-n)_N]$ | $X[(-k)_N]$ |
| Circular convolution | $x[n]\circledast_N y[n]$ | $X[k]Y[k]$ |
| Multiplication | $x[n]y[n]$ | $\frac{1}{N}X[k]\circledast_N Y[k]$ |

For real-valued $x[n]$, the DFT has conjugate symmetry:
$$
X[N-k]=X^*[k].
$$
The bins $k=0$ and, for even $N$, $k=N/2$ are purely real. This symmetry is used heavily in real-valued FFT implementations.

Parseval's relation for the DFT is
$$
\sum_{n=0}^{N-1}|x[n]|^2
=\frac{1}{N}\sum_{k=0}^{N-1}|X[k]|^2.
$$
Energy is preserved up to the normalization convention.

---
## 10.3 Circular and Linear Convolution
[ ](/img/user/Reading/Books/Electrical%20Engineering%20and%20Signal%20Processing/Discrete-Time%20Signal%20Processing%20Oppenheimer.pdf)

The DFT converts circular convolution into multiplication:
$$
y[n]=x[n]\circledast_N h[n]
\quad\Longleftrightarrow\quad
Y[k]=X[k]H[k].
$$
The $N$-point circular convolution is
$$
y[n]=\sum_{m=0}^{N-1}x[m]h[(n-m)_N].
$$
Circular convolution wraps around modulo $N$. Linear convolution does not.

If $x[n]$ has length $L_x$ and $h[n]$ has length $L_h$, their linear convolution has length
$$
L_y=L_x+L_h-1.
$$
To compute linear convolution using the DFT, choose
$$
N\geq L_x+L_h-1,
$$
zero-pad both sequences to length $N$, multiply their DFTs, and take the inverse DFT. With enough zero-padding, the circular wraparound happens only in zeros and therefore matches linear convolution.

For long signals, filtering with one giant FFT is inefficient or impossible due to memory. Practical block methods include:

- **overlap-add:** split the input into blocks, zero-pad each block, convolve by FFT, and add overlapping output tails;
- **overlap-save:** process overlapping input blocks and discard the corrupted samples caused by circular wraparound.

Both methods implement ordinary LTI filtering while using FFTs internally.

---
## 10.4 Spectral Leakage and Windowing
[ ](/img/user/Reading/Books/Electrical%20Engineering%20and%20Signal%20Processing/Discrete-Time%20Signal%20Processing%20Oppenheimer.pdf)

When a finite segment is analysed with a DFT, the signal is multiplied by a window $w[n]$:
$$
x_w[n]=x[n]w[n].
$$
Multiplication in time corresponds to convolution in frequency. Thus the measured spectrum is the true spectrum blurred by the window spectrum:
$$
X_w(e^{j\omega})
=\frac{1}{2\pi}X(e^{j\omega})*W(e^{j\omega}).
$$

For a rectangular window, the window transform has narrow main lobe but large side lobes. If a sinusoid does not land exactly on a DFT bin, its energy spreads into many bins. This is spectral leakage.

Other windows trade main-lobe width against side-lobe level:

- rectangular: best frequency resolution, worst leakage;
- Hann/Hamming: reduced side lobes, wider main lobe;
- Blackman: stronger side-lobe suppression, even wider main lobe;
- Kaiser: adjustable tradeoff through a parameter.

Zero-padding does not improve the true frequency resolution. It samples the same windowed DTFT more densely, which can make peaks easier to locate visually or numerically. The actual ability to separate two close frequencies is set mainly by the observation length and window shape.

---
## 10.5 Fast Fourier Transform
[ ](/img/user/Reading/Books/Electrical%20Engineering%20and%20Signal%20Processing/Discrete-Time%20Signal%20Processing%20Oppenheimer.pdf)

Direct computation of the DFT requires $N^2$ complex multiplications. The FFT exploits symmetry and periodicity of the twiddle factors
$$
W_N=e^{-j2\pi/N}
$$
to reduce the complexity to order
$$
O(N\log_2 N)
$$
for radix-2 lengths.

For $N$ even, split the DFT into even and odd time samples:
$$
X[k]=\sum_{n=0}^{N-1}x[n]W_N^{kn}.
$$
Write $n=2r$ and $n=2r+1$:
$$
X[k]=\sum_{r=0}^{N/2-1}x[2r]W_{N/2}^{kr}
 +W_N^k\sum_{r=0}^{N/2-1}x[2r+1]W_{N/2}^{kr}.
$$
Define
$$
E[k]=\sum_{r=0}^{N/2-1}x[2r]W_{N/2}^{kr},
\qquad
O[k]=\sum_{r=0}^{N/2-1}x[2r+1]W_{N/2}^{kr}.
$$
Then
$$
X[k]=E[k]+W_N^kO[k],
$$
and
$$
X[k+N/2]=E[k]-W_N^kO[k],
$$
for $k=0,\ldots,N/2-1$. This is the decimation-in-time FFT butterfly.

Repeating this decomposition recursively gives the FFT. Decimation-in-frequency uses the complementary idea: split the output frequencies first rather than the input time indices. Both lead to the same complexity class.

Important implementation details are:

- bit-reversed ordering or equivalent index permutations;
- in-place butterflies to reduce memory;
- precomputed or recursively generated twiddle factors;
- scaling conventions for the inverse transform;
- numerical round-off, especially for fixed-point implementations.

---
## 10.6 Short-Time Fourier Analysis
[ ](/img/user/Reading/Books/Electrical%20Engineering%20and%20Signal%20Processing/Discrete-Time%20Signal%20Processing%20Oppenheimer.pdf)

The DFT assumes the analysed segment is the object of interest. For signals whose spectrum changes with time, one uses a sliding window:
$$
X[m,k]=\sum_{n=-\infty}^{\infty}
x[n]w[n-mR]e^{-j2\pi kn/N},
$$
where $m$ indexes the frame and $R$ is the hop size. This is the short-time Fourier transform (STFT).

The STFT gives a time-frequency representation. The window length controls the tradeoff:

- a long window gives good frequency resolution but poor time localization;
- a short window gives good time localization but poor frequency resolution.

There is no way around this tradeoff for Fourier windows. It is the signal-processing version of a time-bandwidth limitation. Speech, radar, music, vibration analysis, and spectroscopy all use variants of this idea.

For reconstruction, neighbouring windows must overlap in a way that allows the windowed segments to add back to the original signal. This is the basis of overlap-add reconstruction and many modern time-frequency processing algorithms.
