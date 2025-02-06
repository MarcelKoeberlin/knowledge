---
{"dg-publish":true,"permalink":"/attoline/procedures-1/","hide":"true","hideInGraph":"true","updated":"2025-02-05T18:19:53.000+01:00"}
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
12. Overlap them [[Attoline/Procedures (1)#3.1 Spatial overlap\|spatially]] and [[Attoline/Procedures (1)#3.2 Temporal overlap\|temporally]].
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
1. Lift toroidal mirror
2. Insert filter
3. Turn shutter controller off
4. Open gas to HHG
5. STRA: Set position before zero
6. Turn shutter on, and check if something happens with the counts
7. Start
8. Shutter settings: SPSS * steps > 100

# 5 RABBITT
1. Set delay piezo to 'RABBITT' (standard setting is 'Nadja')
2. Turn off gauge below table corner, CH2
3. Pump the tubes and check pressure on right display -> 'target gas' should go down
4. Target gas should be around 1500
5. Open everything on the left side of target window (thin tube, behind power meter)
6. Set manometer to 295
7. Turn on preamp current
8. Turn on FASTcomtec sockets
9. Overlap them [[Attoline/Procedures (1)#3.1 Spatial overlap\|spatially]] and [[Attoline/Procedures (1)#3.2 Temporal overlap\|temporally]]
10. Open gas TOF at bottle
11. Open gas before and after manometer
12. Set manometer to 295
13. Drive in nozzle to line
14. Measure IR power and set with 1AB to roughly 1 mW
15. Insert 100 nm filter
16. Turn on trigger (below intralux)
17. Start MCS6A program
18. Start Attoline, set device to FAST and do 3000 accumulation
19. Let XUV pass, open shutter (doesn't matter if it saturates)
20. Ramp up MCP (high voltage on) voltage slowly with right knob, expect counts over 1.95 V
21. Go to roughly 2000, and do not go above 2.1 V
22. Optimise by moving nozzle
	1. If the counts are too high, then the metal is in the beam
23. Settings:
	2. 100 steps, 2 delta (fs steps), 0 start (0 V)
24. Open IR with electronic shutter controller
25. Voltage might need to be readjusted after measurement
26. As soon as we see pulse, set it from start to (start + steps * delta)
# 6 10-Pass Alignment
1. Connect photodiode to oscilloscope
2. Use insertable mirror to align pass by pass (actually pass 2,4, 8 and 10)
3. 
bla bla

# 7 Venting the Back Part
1. Close two black valves
2. Move out filter in front of camera
3. Close the valves to the turbos
4. Shut down 'cross chamber' and 'surface' (both on right side of pressure reader, 2 out of 5)
5. Turn off camera
6. Start grafana (ulp), and on right monitor 'sent to API'


# Laser shut-down
In E8;
1. Turn off beam stabilisation 3
2. Measure the power
3. Block seeding
4. Turn off the crystal chiller, temperature will slowly raise
5. Wait for $T=250^\circ$ and ramp down Evo voltage from 17.9 V to 7 V. Turn off.
6. Turn of Evo 30 (black box)
7. Ramp down the Pockel's cell
8. Turn off the Dazzler
9. Turn off beam stabilisation 2 and 1
10. Turn off crystal chiller heating

In E6.2:
1. Turn off the chiller 
2. Turn off the balistic thingy, by turning the thing

# Venting Generation Chamber
1. Block beam in ==E8==
2. Move out all filters
3. Close black valves before and after the manipulation chamber, and after the glass hub
4. Close the valves to the Pre-vac of the turbo pumps to be switched off
5. Ensure the shutter chiller is turned off
6. Shut down the four turbo pumps labelled 'Front Unit'
7. Remove KF on second camber to prevent over-pressure
8. Open the nitrogen valve on the wall to approximately 0.8 bar
9. After the turbos spun down, pen the nitrogen valve at first chamber to start purging
10. Wait until the KF be easily removed, which usually happens when the focusing chamber pressure is around 7E+2 mbar
11. Close the nitrogen at first chamber and wall
12. After venting: 