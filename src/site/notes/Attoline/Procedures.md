---
{"dg-publish":true,"permalink":"/attoline/procedures/","hide":"true","hideInGraph":"true","updated":"2025-02-04T18:42:13.000+01:00"}
---

# 1 High-Harmonic Generation

1. Insert beamblock 1 and 2
2. Close iris
3. Put beamblock after fibre
4. Turn on beam stabilization and realign if necessary, using either focussing mirror or the two (piezo) mirrors right before the fibre
5. Open iris
6. check if mode looks good
7. Close shutter
8. Remove beamblock
9. Insert 600 nm filter, use bottom right monitor
10. Close gas bottle and HHG valve
11. Fully open the pressure preregulator
12. Open 'pump' valves and start pump
13. After a minute (see pressure on right display), stop pump and close pump values
14. Fully close pressure preregulator
15. Open HHG gas
16. Set pressure preregulator (something like 60)
17. Open both vacuum valves (?)
18. Turn on camera, its power supply is behind it
19. Start software in LabView
20. Move up the mirror
21. Let HHG gas enter
22. Open Shutter
23. If there are counts, optimize them a little
24. Let the system warm up: 
	1. Close gas to vacuum chamber, to not waste gas
	2. Close shutter

# 2 ATAS
1. Insert sample
2. Open chamber with crank
3. Start VAB program COM3 position, set COM port, 'online'
4. Check counts while inserting
5. Turn on light in chamber
6. Start camera on TinkPad
7. Turn on stepper and control (?)
8. Lower end of sample holder at $z\approx 34$ 
9. Start STRA program 
	1. >[!TIP] Doesn't work? Turn trigger on
10. Set proper exposure
11. Optimize x, y, z position
12. Overlap them [[Attoline/Procedures#3.1 Spatial overlap\|spatially]] and [[Attoline/Procedures#3.2 Temporal overlap\|temporally]].
13. Tune to specific power with IRIS pump / IR
14. > [!WARNING] Turn on the shutter chiller

# 3 Overlap
Overlap is done without filter and without gas: You compare both red pulses. 
## 3.1 Spatial Overlap
1. Align to camera, place _cross_ with mouse
2. Close the shutter, main point will vanish
3. Turn on electornic shutter controller
4. Align probe on _cross_ with controller 2AB (don't be confused with the reflection!)
5. Optimize shape with 3AB
6. Repeat 4. and 5. until shape and position is good
7. Open shutter
## 3.2 Temporal Overlap
1. Use ThinkPad and look at interferogram
2. Set piezo to 5 V (preset 'reset')
3. Maximize signal with the mirror before the 'wheel', but after the beam splitter
4. Maximize interference with motion controller: 'Move relative position'
5. Write down the position
# 4 Measuring STRA
6. Lift toroidal mirror
7. Insert filter
8. Turn shutter controller off
9. Open gas to HHG
10. STRA: Set position before zero
11. Turn shutter on, and check if something happens with the counts
12. Start
13. Shutter settings: SPSS * steps > 100

# 5 RABBITT
14. Set delay piezo to 'RABBITT' (standard setting is 'Nadja')
15. Turn off gauge below table corner, CH2
16. Pump the tubes and check pressure on right display -> 'target gas' should go down
17. Target gas should be around 1500
18. Open everything on the left side of target window (thin tube, behind power meter)
19. Set manometer to 295
20. Turn on preamp current
21. Turn on FASTcomtec sockets
22. Overlap them [[Attoline/Procedures#3.1 Spatial overlap\|spatially]] and [[Attoline/Procedures#3.2 Temporal overlap\|temporally]]
23. Open gas TOF at bottle
24. Open gas before and after manometer
25. Set manometer to 295
26. Drive in nozzle to line
27. Measure IR power and set with 1AB to roughly 1 mW
28. Insert 100 nm filter
29. Turn on trigger (below intralux)
30. Start MCS6A program
31. Start Attoline, set device to FAST and do 3000 accumulation
32. Let XUV pass, open shutter (doesn't matter if it saturates)
33. Ramp up MCP (high voltage on) voltage slowly with right knob, expect counts over 1.95 V
34. Go to roughly 2000, and do not go above 2.1 V
35. Optimise by moving nozzle
	1. If the counts are too high, then the metal is in the beam
36. Settings:
	2. 100 steps, 2 delta (fs steps), 0 start (0 V)
37. Open IR with electronic shutter controller
38. Voltage might need to be readjusted after measurement
39. As soon as we see pulse, set it from start to (start + steps * delta)
# 6 10-Pass Alignment
40. Connect photodiode to oscilloscope
41. Use insertable mirror to align pass by pass (actually pass 2,4, 8 and 10)
42. 
bla bla

# 7 Venting the Back Part
43. Close two black valves
44. Move out filter in front of camera
45. Close the valves to the turbos
46. Shut down 'cross chamber' and 'surface' (both on right side of pressure reader, 2 out of 5)
47. Turn of camera
48. Start grafana (ulp), and on right monitor 'sent to API'
